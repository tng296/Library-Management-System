import React from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useState, useEffect } from 'react';
import HandleReservationModal from './HandleReservationModal';

interface IStudyRoom {
    roomID: number,
    availability: boolean,
    email: string
}

const StudyRoom: React.FC = () => {

    const [studyroom, setStudyRoom] = useState<IStudyRoom[]>([]);
    const [roomReservation, setRoomReservation] = useState<IStudyRoom>({} as IStudyRoom);
    const [isShownReservationModal, setIsShownReservationModal] = useState(false);

    useEffect(() => {
        getStudyRoom();
    }, []);

    const getStudyRoom = async () => {
        let res = await axios.get('http://localhost:3000/fetchStudyRoom').then((res) => {
            setStudyRoom(res.data);
        }).catch(err => console.log(err));
    }

    const handleReservationEvent = (room: IStudyRoom) => {
        const reservationDone = [...studyroom];
        const index = reservationDone.findIndex((item) => item.roomID === room.roomID);
        if (index !== -1) {
            reservationDone[index] = room;
        }
        setStudyRoom(reservationDone);
    }

    const handleReservation = (room: IStudyRoom) => {
        setIsShownReservationModal(true);
        setRoomReservation(room);
    }

    const handleClose = () => {
        setIsShownReservationModal(false);
    }


    return (
        <div>
            <div className="my-3 add-new">
                <span>
                    <b>Study Room List</b>
                </span>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Study Room ID</th>
                        <th>Availability</th>
                        <th>Rented by</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {studyroom && studyroom.length > 0 && studyroom.map((room, index) => {
                        return (
                            <tr key={`room-${index}`}>
                                <td>{room.roomID}</td>
                                <td>{room.availability}</td>
                                <td>{room.email}</td>
                                <td>
                                    <button className="btn btn-primary mx-3" onClick={() => handleReservation(room)}>Reserve</button>
                                    <button className="btn btn-warning" >Cancel</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table >

            <HandleReservationModal show={isShownReservationModal} handleClose={handleClose} />
        </div >
    )
}
export default StudyRoom;
