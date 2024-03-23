import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import _ from "lodash";
import CheckOutModal from '../modal_components/CheckOutModal';
import CheckInModal from '../modal_components/CheckInModal';

interface Book {
    ISBN: string;
    genre: string;
    title: string;
    location: string;
    status: string;
    publishedBy: string;
    writtenBy: string;
    language: string;
    rentedBy: string;
    shelf: string;
}

const TableBook: React.FC = () => {

    const [originalListBook, setOriginalListBook] = useState<Book[]>([]);
    const [listBook, setListBook] = useState<Book[]>([]);
    const [bookSearch, setBookSearch] = useState<Book>({} as Book);
    const [isShownCheckOutModal, setIsShownCheckOutModal] = useState(false);
    const [isShownCheckInModal, setIsShownCheckInModal] = useState(false);

    useEffect(() => {
        getBooks();
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const keyword = e.target.value.toLowerCase();
        if (keyword) {
            const filteredBooks = originalListBook.filter(item => {
                return item.title.toLowerCase().includes(keyword);
            });
            setListBook(filteredBooks);
        } else {
            setListBook(originalListBook);
        }
    }

    const getBooks = async () => {
        await axios.get('http://localhost:3000/fetchBooks')
            .then((res) => {
                setOriginalListBook(res.data);
                setListBook(res.data);
            })
            .catch(err => console.log(err));
    }

    const handleCheckOut = (book: Book) => {
        setIsShownCheckOutModal(true);
        setBookSearch(book);
    }

    const handleCheckIn = (book: Book) => {
        setIsShownCheckInModal(true);
        setBookSearch(book);
    }


    const handleCheckOutFromModal = (book: Book) => {
        const updatedListBook = [...listBook];
        const index = updatedListBook.findIndex((item) => item.title === book.title);
        if (index !== -1) {
            updatedListBook[index] = book;
        }
        setListBook(updatedListBook);
    }
    const handleCheckInFromModal = (book: Book) => {
        const updatedListBook = [...listBook];
        const index = updatedListBook.findIndex((item) => item.title === book.title);
        if (index !== -1) {
            updatedListBook[index] = book;
        }
        setListBook(updatedListBook);
    }

    return (
        <div>
            <div className="my-3 add-new">
                <span><b>Book Search</b></span>
            </div>
            <div>
                <input type="text" placeholder="Search book" onChange={handleSearch} />
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Status</th>
                        <th>Shelf</th>
                        <th>Rented By</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listBook.map((book, index) => (
                        <tr key={`book-${index}`}>
                            <td>{book.ISBN}</td>
                            <td>{book.title}</td>
                            <td>{book.location}</td>
                            <td>{book.status}</td>
                            <td>{book.shelf}</td>
                            <td>{book.rentedBy}</td>
                            <td>
                                <button className="btn btn-primary mx-3" onClick={() => handleCheckOut(book)}>Check Out</button>
                                <button className="btn btn-warning" onClick={() => handleCheckIn(book)}>Check In</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <CheckOutModal show={isShownCheckOutModal} handleClose={() => setIsShownCheckOutModal(false)} bookSearch={bookSearch} handleCheckOutFromModal={handleCheckOutFromModal} />
                <CheckInModal show={isShownCheckInModal} handleClose={() => setIsShownCheckInModal(false)} bookSearch={bookSearch} handleCheckInFromModal={handleCheckInFromModal} />

            </Table>
        </div>
    );
}

export default TableBook;
