import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { toast } from 'react-toastify';
import { deleteUser } from '../services/UserService';

const ModalConfirm: React.FC = (props) => {
    interface ModalAddNewProps {
        show: boolean;
        handleClose: () => void;
        handleAddingNewUser: (user: any) => void;
        userDelete: (user: any) => void;
        handleDeleteUserFromModal: (user: any) => void;
    }

    const { show, handleClose, userDelete, handleDeleteUserFromModal } = props as ModalAddNewProps;

    const confirmDelete = async () => {
        let res = await deleteUser(userDelete.id);
        if (res && +res.statusCode === 204) {
            toast.success('Delete user successfully');
            handleClose();
            handleDeleteUserFromModal(userDelete);
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
                    <Modal.Title>Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">
                        Confirm delete this user? {userDelete.email}
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

export default ModalConfirm;