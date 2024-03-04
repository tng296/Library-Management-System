import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { toast } from 'react-toastify';
import axios from 'axios';

const ModalEditUser: React.FC = (props) => {
    const { show, handleClose, userEdit, handleEditUserfromModal, data } = props as { show: boolean, handleClose: () => void, userEdit: any, handleEditUserfromModal: (data: any) => void, data: any };

    const [email, setEmail] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [fName, setFirstName] = useState<string>('');
    const [lName, setLastName] = useState<string>('');

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handleStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value);
    }
    const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    }
    const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    }

    const handleEditUser = async () => {
        console.log(">>>check memberID", userEdit.memberID)
        let res = await axios.put('http://localhost:3000/edituser', {
            data: {
                email: email,
                fName: fName,
                lName: lName,
                status: status,
                memberID: userEdit.memberID,
            },
        });
        if (res && res.data.success) {
            handleEditUserfromModal({
                email: email,
                fName: fName,
                lName: lName,
                status: status,
                memberID: userEdit.memberID,
            });
            handleClose();
            toast.success("Edit user successfully");
        }
    };

    useEffect(() => {
        if (show) {
            setEmail(userEdit.email)
            setStatus(userEdit.status)
            setFirstName(userEdit.fName)
            setLastName(userEdit.lName)
        }
    }, [userEdit])
    return (
        <div>
            <Modal show={show} onHide={handleClose} backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">
                        <div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="text" className="form-control" placeholder="Enter email" value={email} onChange={handleEmail} />
                            </div>
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" className="form-control" placeholder="First Name" value={fName} onChange={handleFirstName} />
                            </div>
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" className="form-control" placeholder="First Name" value={lName} onChange={handleLastName} />
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <input type="text" className="form-control" placeholder="Status" value={status} onChange={handleStatus} />
                            </div>
                        </div>
                    </div></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleEditUser}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalEditUser