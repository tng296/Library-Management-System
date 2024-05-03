import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { toast } from 'react-toastify';
import axios from 'axios';

interface ModalDeleteBookProps {
    show: boolean,
    handleClose: () => void,
    bookDelete: any,
    handleDeleteBookFromModal: (data: any) => void,
}


const ModalDeleteBook: React.FC<ModalDeleteBookProps> = (props) => {
    const { show, handleClose, bookDelete, handleDeleteBookFromModal } = props as {
        show: boolean,
        handleClose: () => void, bookDelete: any, handleDeleteBookFromModal: (data: any) => void
    };

    const confirmDelete = async () => {
        let res = await axios.delete(`http://localhost:3000/deletebook`, { data: { ISBN: bookDelete.ISBN } });
        if (res && res.data.success) {
            toast.success('Delete user successfully');
            handleClose();
            handleDeleteBookFromModal(bookDelete);
        }
        else {
            toast.error('Delete user failed');
        }
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose} backdrop="static"
                keyboard={false} >
                <Modal.Header closeButton>
                    <Modal.Title>Delete Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">
                        Confirm delete this book with this {bookDelete.ISBN} ?
                    </div></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={confirmDelete}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalDeleteBook;