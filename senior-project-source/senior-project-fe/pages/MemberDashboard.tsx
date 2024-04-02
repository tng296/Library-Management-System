import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Book,
    DoorOpen,
    CalendarCheck,
} from "react-bootstrap-icons";

const MemberDashboard: React.FC = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm text-center">
                    <Link
                        to="/booksearch"
                        className="text-decoration-none text-dark d-flex flex-column align-items-center justify-content-center"
                    >
                        <Book className="mb-2" size={48} />
                        <span>Book</span>
                    </Link>
                </div>
                <div className="col-sm text-center">
                    <Link
                        to="/study-room"
                        className="text-decoration-none text-dark d-flex flex-column align-items-center justify-content-center"
                    >
                        <DoorOpen className="mb-2" size={48} />
                        <span>Study Room</span>
                    </Link>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-sm text-center">
                    <Link
                        to="/appointments"
                        className="text-decoration-none text-dark d-flex flex-column align-items-center justify-content-center"
                    >
                        <CalendarCheck className="mb-2" size={48} />
                        <span>Appointments</span>
                    </Link>
                </div>
                <div className="col-sm text-center">
                    <Link
                        to="/personal-info"
                        className="text-decoration-none text-dark d-flex flex-column align-items-center justify-content-center">
                        <CalendarCheck className="mb-2" size={48} />
                        <span>Personal Info</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MemberDashboard;
