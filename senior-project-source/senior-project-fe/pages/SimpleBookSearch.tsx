import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import _ from "lodash";

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
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default TableBook;
