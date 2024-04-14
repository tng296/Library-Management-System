import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { toast } from 'react-toastify';
import axios from 'axios';

interface ModalHandleReservationProps {
    show: boolean,
    handleClose: () => void,
    room: any,
    handleReservationFromModal: (data: any) => void,
}

const handleReservationModal: React.FC<ModalHandleReservationProps> = (props) => {
    const { show, handleClose, room, handleReservationFromModal } = props as {
        show: boolean;
        handleClose: () => void;
        room: any;
        handleReservationFromModal: (data: any) => void;
    };

    const [email, setEmail] = useState('');

    const handleMemberID = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleReservation = async () => {
        let res = await axios.put('http://localhost:3000/reserveRoom', { data: { memberID: room.memberID, roomID: room.roomID, availability: false } });
        if (res && res.data && res.data.success) {
            handleReservationFromModal(res.data.data);
            handleClose();
            toast.success('Reservation successful');
        } else {
            toast.error('Reservation failed');
        };
    };

    useEffect(() => {
        if (show) {
            setEmail(room.email);
        }
    }, [room]);

    return (
        <div>
            <Modal show={show} onHide={handleClose} backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Make a Reservation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">
                        <div>
                            <div className="form-group">
                                <label>Member Email to Rent</label>
                                <input type="text" className="form-control" placeholder="Enter email" value={email} onChange={handleMemberID} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleReservation}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

}
export default handleReservationModal;