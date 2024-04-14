import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { toast } from 'react-toastify';
import axios from 'axios';

interface ModalConfirmProps {
    show: boolean,
    handleClose: () => void,
    userDelete: any,
    handleDeleteUserFromModal: (data: any) => void,

}

const ModalConfirm: React.FC<ModalConfirmProps> = (props) => {
    const { show, handleClose, userDelete, handleDeleteUserFromModal } = props as {
        show: boolean,
        handleClose: () => void, userDelete: any, handleDeleteUserFromModal: (data: any) => void
    };

    const confirmDelete = async () => {
        let res = await axios.delete(`http://localhost:3000/deleteuser`, { data: { memberID: userDelete.memberID } });
        if (res && res.data.success) {
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