import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { updateUser } from '../services/UserService'
import { toast } from 'react-toastify';
import { first, set } from 'lodash';

const ModalEditUser: React.FC = (props) => {
    const { show, handleClose, userEdit, handleEditUserfromModal } = props as { show: boolean, handleClose: () => void, userEdit: any, handleEditUserfromModal: (data: any) => void };

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [first_name, setFirstName] = useState<string>('');
    const [last_name, setLastName] = useState<string>('');

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    }
    const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    }

    const handleEditUser = async () => {
        let res = await updateUser(email, password, first_name, last_name);
        if (res && res.updatedAt) {
            handleEditUserfromModal({
                email: email,
                password: password,
                first_name: first_name,
                last_name: last_name,
                id: userEdit.id,
            });
            handleClose();
            toast.success("Edit user successfully");
        }
    }
    useEffect(() => {
        if (show) {
            setEmail(userEdit.email)
            setPassword(userEdit.password)
            setFirstName(userEdit.first_name)
            setLastName(userEdit.last_name)
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
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" value={password} onChange={handlePassword} />
                            </div>
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" className="form-control" placeholder="First Name" value={first_name} onChange={handleFirstName} />
                            </div>
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" className="form-control" placeholder="First Name" value={last_name} onChange={handleLastName} />
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