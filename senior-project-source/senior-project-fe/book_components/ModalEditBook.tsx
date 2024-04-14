import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { toast } from 'react-toastify';
import axios from 'axios';

interface ModalAddNewBookProps {
    show: boolean,
    handleClose: () => void,
    bookEdit: any,
    handleEditBookfromModal: (data: any) => void,
    data?: any
}

const ModalEditBook: React.FC<ModalAddNewBookProps> = (props) => {
    const { show, handleClose, bookEdit, handleEditBookfromModal } = props as {
        show: any,
        handleClose: () => void,
        bookEdit: any,
        handleEditBookfromModal: (data: any) => void,
        data: any
    };

    const [ISBN, setISBN] = useState(bookEdit.ISBN);
    const [genre, setGenre] = useState(bookEdit.genre);
    const [title, setTitle] = useState(bookEdit.title);
    const [location, setLocation] = useState(bookEdit.location);
    const [status, setStatus] = useState(bookEdit.status);
    const [publishedBy, setPublishedBy] = useState(bookEdit.publishedBy);
    const [writtenBy, setWrittenBy] = useState(bookEdit.writtenBy);
    const [language, setLanguage] = useState(bookEdit.language);
    const [shelf, setShelf] = useState(bookEdit.shelf);

    const handleGenre = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGenre(event.target.value);
    }
    const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }
    const handleLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(event.target.value);
    }
    const handleStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value);
    }
    const handlePublishedBy = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPublishedBy(event.target.value);
    }
    const handleWrittenBy = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWrittenBy(event.target.value);
    }
    const handleLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLanguage(event.target.value);
    }
    const handleShelf = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShelf(event.target.value);
    }


    const handleEditBook = async () => {
        let res = await axios.put('http://localhost:3000/editbook', {
            data: {
                ISBN: ISBN,
                genre: genre,
                title: title,
                location: location,
                status: status,
                publishedBy: publishedBy,
                writtenBy: writtenBy,
                language: language,
                shelf: shelf,
            },
        });
        if (res && res.data.success) {
            handleEditBookfromModal({
                ISBN: ISBN,
                genre: genre,
                title: title,
                location: location,
                status: status,
                publishedBy: publishedBy,
                writtenBy: writtenBy,
                language: language,
                shelf: shelf,
            });
            handleClose();
            toast.success("Edit book successfully");
        }
    };

    useEffect(() => {
        if (show) {
            setISBN(bookEdit.ISBN);
            setGenre(bookEdit.genre);
            setTitle(bookEdit.title);
            setLocation(bookEdit.location);
            setStatus(bookEdit.status);
            setPublishedBy(bookEdit.publishedBy);
            setWrittenBy(bookEdit.writtenBy);
            setLanguage(bookEdit.language);
            setShelf(bookEdit.shelf);
        }
    }, [bookEdit])
    return (
        <div>
            <Modal show={show} onHide={handleClose} backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">
                        <div>
                            <div className="form-group">
                                <label>Genre</label>
                                <input type="text" className="form-control" placeholder="Enter email" value={genre} onChange={handleGenre} />
                            </div>
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" className="form-control" placeholder="Enter email" value={title} onChange={handleTitle} />
                            </div>
                            <div className="form-group">
                                <label>Location</label>
                                <input type="text" className="form-control" placeholder="Enter email" value={location} onChange={handleLocation} />
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <input type="text" className="form-control" placeholder="Enter email" value={status} onChange={handleStatus} />
                            </div>
                            <div className="form-group">
                                <label>Published By</label>
                                <input type="text" className="form-control" placeholder="Enter email" value={publishedBy} onChange={handlePublishedBy} />
                            </div>
                            <div className="form-group">
                                <label>Written By</label>
                                <input type="text" className="form-control" placeholder="Enter email" value={writtenBy} onChange={handleWrittenBy} />
                            </div>
                            <div className="form-group">
                                <label>Language</label>
                                <input type="text" className="form-control" placeholder="Enter email" value={language} onChange={handleLanguage} />
                            </div>
                            <div className="form-group">
                                <label>Shelf</label>
                                <input type="text" className="form-control" placeholder="Enter email" value={shelf} onChange={handleShelf} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleEditBook}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalEditBook