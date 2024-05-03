import React, { useState } from 'react';

const StudyRoomReservation: React.FC = () => {
    const [roomNumber, setRoomNumber] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [time, setTime] = useState<string>('');

    const handleRoomNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRoomNumber(event.target.value);
    };

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
    };

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTime(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Room Number:', roomNumber);
        console.log('Date:', date);
        console.log('Time:', time);
    };

    return (
        <div>
            <h2>Study Room Reservation</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="roomNumber">Room Number:</label>
                    <input
                        type="text"
                        id="roomNumber"
                        value={roomNumber}
                        onChange={handleRoomNumberChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={handleDateChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="time">Time:</label>
                    <input
                        type="time"
                        id="time"
                        value={time}
                        onChange={handleTimeChange}
                        required
                    />
                </div>
                <button type="submit">Reserve Room</button>
            </form>
        </div>
    );
};

export default StudyRoomReservation;
