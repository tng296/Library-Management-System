import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import _ from "lodash";
import { fetchAllBook } from '../services/BookService';
interface Book {
    isbn: string;
    genre: string;
    title: string;
    location: string;
    status: string;
    publishedBy: string;
    writtenBy: string;
    language: string;
    shelf: string
}
const TableBook: React.FC = () =>{
    
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
    

    const handlePageclick = () => { }
    return (
        <div>
            <div className="my-3 add-new">
                <span>
                    <b>Book List</b>
                </span>
                <button className="btn btn-primary" onClick={() => setIsShownModalAddNewBook(true)}>Add New Book</button>
            </div>
            {/* Table component */}

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
                            <tr key={`user-${index}`}>
                                <td>{book.isbn}</td>
                                <td>{book.genre}</td>
                                <td>{book.title}</td>
                                <td>{book.location}</td>
                                <td>{book.status}</td>
                                <td>{book.publishedBy}</td>
                                <td>{book.writtenBy}</td>
                                <td>{book.language}</td>
                                <td>{book.shelf}</td>
                                <td>
                                    <button className="btn btn-danger mx-3">Delete</button>
                                    <button className="btn btn-warning">Edit</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default TableBook
