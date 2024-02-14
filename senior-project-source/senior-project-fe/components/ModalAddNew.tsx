import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { postUser } from '../services/UserService';
import { toast } from 'react-toastify';

const ModalAddNew: React.FC = (props) => {
    interface ModalAddNewProps {
        show: boolean;
        handleClose: () => void;
        handleAddingNewUser: (user: any) => void;
    }

    const { show, handleClose, handleAddingNewUser } = props as ModalAddNewProps;

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleSaveUser = async () => {
        let res = await postUser(email, password);
        if (res && res.id) {
            handleClose();
            setEmail('');
            setPassword('');
            toast.success("Add new user successfully");
            handleAddingNewUser({ id: res.id, email: email, first_name: name });
        }
        else {
            toast.error("Add new user failed");
        }
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
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
                        </div>
                    </div></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveUser}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalAddNew