import React from 'react';
import { Link } from 'react-router-dom';

const StudyRoomIntroduction: React.FC = () => {
    return (
        <div>
            <h2>Study Room Introduction</h2>
            <p>Welcome to our study room facilities! Our study rooms provide a quiet and comfortable environment for individual or group study sessions.</p>
            <p>Each study room is equipped with modern amenities and resources to support your academic needs.</p>
            <p>To reserve a study room, please proceed to our <Link to="/study-room-reservation">Study Room Reservation</Link> page.</p>
        </div>
    );
};

export default StudyRoomIntroduction;
