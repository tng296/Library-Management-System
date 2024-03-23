import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { toast } from 'react-toastify';
import axios from 'axios';

const CheckInModal: React.FC = (props) => {
    const { show, handleClose, bookSearch, handleCheckInFromModal } = props as {
        show: boolean, handleClose: () => void,
        bookSearch: any,
        handleCheckInFromModal: (data: any) => void,
    };

    const [ISBN, setISBN] = useState(bookSearch.ISBN);

    const handleEditBook = async () => {
        let res = await axios.put('http://localhost:3000/checkinbook', {
            data: {
                ISBN: ISBN
            },
        });
        if (res && res.data.success) {
            handleCheckInFromModal({
                ISBN: ISBN
            });
            handleClose();
            toast.success("Check in successfully");
        }
    };

    useEffect(() => {
        if (show) {
            setISBN(bookSearch.ISBN);
        }
    }, [bookSearch])


    return (
        <div>
            <Modal show={show} onHide={handleClose} backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Check Out</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">
                        Confirm Check In for this book with this {bookSearch.ISBN} ?
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

export default CheckInModal;