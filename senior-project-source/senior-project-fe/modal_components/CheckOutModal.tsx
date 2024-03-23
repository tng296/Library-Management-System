import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { toast } from 'react-toastify';
import axios from 'axios';

const CheckOutModal: React.FC = (props) => {
    const { show, handleClose, bookSearch, handleCheckOutFromModal } = props as {
        show: boolean, handleClose: () => void,
        bookSearch: any,
        handleCheckOutFromModal: (data: any) => void,
    };

    const [ISBN, setISBN] = useState(bookSearch.ISBN);
    const [rentedBy, setRentedBy] = useState(bookSearch.rentedBy);

    const handleRentedBy = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRentedBy(event.target.value);
    }

    const handleEditBook = async () => {
        console.log(">>>check rentedby:", rentedBy);
        let res = await axios.put('http://localhost:3000/checkoutbook', {
            data: {
                rentedBy: rentedBy,
                ISBN: ISBN
            },
        });
        if (res && res.data.success) {
            handleCheckOutFromModal({
                rentedBy: rentedBy,
                ISBN: ISBN
            });
            handleClose();
            toast.success("Check out successfully");
        }
    };

    useEffect(() => {
        if (show) {
            setISBN(bookSearch.ISBN);
            setRentedBy(bookSearch.rentedBy);
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
                        <div>
                            <div className="form-group">
                                <label>Rented by</label>
                                <input type="text" className="form-control" placeholder="Enter email" value={rentedBy} onChange={handleRentedBy} />
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

export default CheckOutModal;