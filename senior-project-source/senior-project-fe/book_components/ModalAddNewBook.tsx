import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { toast } from 'react-toastify';
import axios from 'axios';

const ModalAddNewBook: React.FC = (props) => {
    interface ModalAddNewProps {
        show: boolean;
        handleClose: () => void;
        handleAddingNewBook: (Book: any) => void;
    }

    const { show, handleClose, handleAddingNewBook } = props as ModalAddNewProps;

    const [ISBN, setISBN] = useState<string>('');
    const [genre, setGenre] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [publishedBy, setPublishedBy] = useState<string>('');
    const [writtenBy, setWrittenBy] = useState<string>('');
    const [language, setLanguage] = useState<string>('');
    const [shelf, setShelf] = useState<string>('');

    const handleISBN = (event: React.ChangeEvent<HTMLInputElement>) => {
        setISBN(event.target.value);
    }
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

    const handleSaveBook = async () => {
        let res = await axios.post('http://localhost:3000/addbook', { data: { ISBN, genre, title, location, status, publishedBy, writtenBy, language, shelf } });
        if (res && res.data) {
            handleAddingNewBook(res.data);
            handleClose();
            setISBN('');
            setGenre('');
            setTitle('');
            setLocation('');
            setStatus('');
            setPublishedBy('');
            setWrittenBy('');
            setLanguage('');
            setShelf('');
            toast.success("Add new book successfully");
        }
        else {
            toast.error("Add new book failed");
        }
    }


    return (
        <div>
            <Modal show={show} onHide={handleClose} backdrop="static"
                keyboard={false} >
                <Modal.Header closeButton>
                    <Modal.Title>Add new book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">
                        <div>
                            <div className="form-group">
                                <label>ISBN</label>
                                <input type="text" className="form-control" placeholder="ISBN" value={ISBN} onChange={handleISBN} />
                            </div>
                            <div className="form-group">
                                <label>Genre</label>
                                <input type="text" className="form-control" placeholder="Genre" value={genre} onChange={handleGenre} />
                            </div>
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" className="form-control" placeholder="Title" value={title} onChange={handleTitle} />
                            </div>
                            <div className="form-group">
                                <label>Location</label>
                                <input type="text" className="form-control" placeholder="Location" value={location} onChange={handleLocation} />
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <input type="text" className="form-control" placeholder="Status" value={status} onChange={handleStatus} />
                            </div>
                            <div className="form-group">
                                <label>Published By</label>
                                <input type="text" className="form-control" placeholder="Published By" value={publishedBy} onChange={handlePublishedBy} />
                            </div>
                            <div className="form-group">
                                <label>Written By</label>
                                <input type="text" className="form-control" placeholder="Written By" value={writtenBy} onChange={handleWrittenBy} />
                            </div>
                            <div className="form-group">
                                <label>Language</label>
                                <input type="text" className="form-control" placeholder="Language" value={language} onChange={handleLanguage} />
                            </div>
                            <div className="form-group">
                                <label>Shelf</label>
                                <input type="text" className="form-control" placeholder="Shelf" value={shelf} onChange={handleShelf} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveBook}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default ModalAddNewBook;