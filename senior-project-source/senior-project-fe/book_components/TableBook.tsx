import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import _, { set } from "lodash";
import ModalEditBook from '../book_components/ModalEditBook';
import ModalAddNewBook from '../book_components/ModalAddNewBook';
import ModalDeleteBook from '../book_components/ModalDeleteBook';

interface Book {
    ISBN: string;
    genre: string;
    title: string;
    location: string;
    status: string;
    publishedBy: string;
    writtenBy: string;
    language: string;
    shelf: string
}

const TableBook: React.FC = () => {
    const [listBook, setListBook] = useState<Book[]>([]);

    useEffect(() => {
        getBooks();
    }, []);

    const [isShownModalAddNewBook, setIsShownModalAddNewBook] = useState(false);
    const [isShownModalEditBook, setIsShownModalEditBook] = useState(false);
    const [isShowModalDeleteBook, setIsShowModalDeleteBook] = useState(false);
    const [bookEdit, setBookEdit] = useState<Book>({} as Book);
    const [bookDelete, setBookDelete] = useState<Book>({} as Book);

    const handleClose = () => {
        setIsShownModalAddNewBook(false);
        setIsShownModalEditBook(false);
        setIsShowModalDeleteBook(false);
    }

    const handleAddingNewBook = (book: Book) => {
        setListBook([book, ...listBook]);
    }

    const getBooks = async () => {
        await axios.get('http://localhost:3000/fetchBooks').then((res) => {
            setListBook(res.data);
        }).catch(err => console.log(err));
    }

    const handleEditBook = (book: Book) => {
        setBookEdit(book);
        setIsShownModalEditBook(true);
    }

    const handleEditBookfromModal = (book: Book) => {
        const updatedListBook = [...listBook];
        const index = updatedListBook.findIndex((item) => item.ISBN === book.ISBN);
        if (index !== -1) {
            updatedListBook[index] = book;
        }
        setListBook(updatedListBook);
    }

    const handleDelete = (book: Book) => {
        setIsShowModalDeleteBook(true);
        setBookDelete(book);
    }

    const handleDeleteBookFromModal = (book: Book) => {
        let cloneListBook = _.cloneDeep(listBook);
        cloneListBook = cloneListBook.filter((item) => item.ISBN !== book.ISBN);
        setListBook(cloneListBook);
    }



    return (
        <div>
            <div className="my-3 add-new">
                <span>
                    <b>Book List</b>
                </span>
                <button className="btn btn-primary" onClick={() => setIsShownModalAddNewBook(true)}>Add New Book</button>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>Genre</th>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Status</th>
                        <th>Published By</th>
                        <th>Written By</th>
                        <th>Language</th>
                        <th>Shelf</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listBook && listBook.length > 0 && listBook.map((book, index) => {
                        return (

                            <tr key={`book-${index}`}>
                                <td>{book.ISBN}</td>
                                <td>{book.genre}</td>
                                <td>{book.title}</td>
                                <td>{book.location}</td>
                                <td>{book.status}</td>
                                <td>{book.publishedBy}</td>
                                <td>{book.writtenBy}</td>
                                <td>{book.language}</td>
                                <td>{book.shelf}</td>
                                <td>
                                    <button className="btn btn-danger mx-3" onClick={() => { handleDelete(book) }}>Delete</button>
                                    <button className="btn btn-warning" onClick={() => { handleEditBook(book) }}>Edit</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <ModalAddNewBook show={isShownModalAddNewBook} handleClose={handleClose} handleAddingNewBook={handleAddingNewBook} />
            <ModalEditBook show={isShownModalEditBook} handleClose={handleClose} bookEdit={bookEdit} handleEditBookfromModal={handleEditBookfromModal} />
            <ModalDeleteBook show={isShowModalDeleteBook} handleClose={handleClose} bookDelete={bookDelete} handleDeleteBookFromModal={handleDeleteBookFromModal} />
        </div>
    )
}

export default TableBook;
