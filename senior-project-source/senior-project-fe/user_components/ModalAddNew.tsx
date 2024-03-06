import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { toast } from 'react-toastify';

const ModalAddNew: React.FC = (props) => {
    interface ModalAddNewProps {
        show: boolean;
        handleClose: () => void;
        handleAddingNewUser: (user: any) => void;
    }

    const { show, handleClose, handleAddingNewUser } = props as ModalAddNewProps;

    const [email, setEmail] = useState<string>('');
    const [fName, setFirstName] = useState<string>('');
    const [lName, setLastName] = useState<string>('');
    const [age, setAge] = useState<string>('');
    const [sex, setSex] = useState<string>('');
    const [DOB, setDOB] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [hold, setHold] = useState<string>('');


    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    }
    const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    }
    const handleAge = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value);
    }
    const handleSex = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSex(event.target.value);
    }
    const handleDOB = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDOB(event.target.value);
    }
    const handleStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value);
    }
    const handleHold = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHold(event.target.value);
    }

    const handleSaveUser = async () => {
        let res = await axios.post('http://localhost:3000/adduser', {
            data: {
                fName: fName,
                lName: lName,
                age: age,
                sex: sex,
                DOB: DOB,
                email: email,
                status: status,
                hold: hold
            }
        });
        if (res && res.data) {
            handleAddingNewUser(res.data);
            handleClose();
            setFirstName('');
            setLastName('');
            setEmail('');
            setAge('');
            setSex('');
            setDOB('');
            setStatus('');
            setHold('');
            toast.success("Add new user successfully");
            handleAddingNewUser(res.data);
        }
        else {
            console.log(res);
            toast.error("Add new user failed");
        }
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose} backdrop="static"
                keyboard={false} >
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
                                <label>First Name</label>
                                <input type="text" className="form-control" placeholder="First Name" value={fName} onChange={handleFirstName} />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" className="form-control" placeholder="Last Name" value={lName} onChange={handleLastName} />
                            </div>
                            <div className="form-group">
                                <label>Age</label>
                                <input type="text" className="form-control" placeholder="Age" value={age} onChange={handleAge} />
                            </div>
                            <div className="form-group">
                                <label>Sex</label>
                                <input type="text" className="form-control" placeholder="sex" value={sex} onChange={handleSex} />
                            </div>
                            <div className="form-group">
                                <label>Date of Birth</label>
                                <input type="text" className="form-control" placeholder="DOB" value={DOB} onChange={handleDOB} />
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <input type="text" className="form-control" placeholder="Status" value={status} onChange={handleStatus} />
                            </div>
                            <div className="form-group">
                                <label>Hold</label>
                                <input type="text" className="form-control" placeholder="Hold" value={hold} onChange={handleHold} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
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