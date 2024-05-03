import React, { useState } from 'react';

const Passport: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<string>('');

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Selected Date:', selectedDate);
    };

    return (
        <div>
            <h2>Passport Appointment</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="date">Select Appointment Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        required
                    />
                </div>
                <button type="submit">Set Appointment</button>
            </form>
        </div>
    );
};

export default Passport;
