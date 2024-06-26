import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Person,
    Book,
    FileEarmarkBarGraph,
    DoorOpen,
    CalendarCheck,
} from "react-bootstrap-icons";

const StaffDashboard: React.FC = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm text-center">
                    <Link
                        to="/members"
                        className="text-decoration-none text-dark d-flex flex-column align-items-center justify-content-center"
                    >
                        <Person className="mb-2" size={48} />
                        <span>Member</span>
                    </Link>
                </div>
                <div className="col-sm text-center">
                    <Link
                        to="/books"
                        className="text-decoration-none text-dark d-flex flex-column align-items-center justify-content-center"
                    >
                        <Book className="mb-2" size={48} />
                        <span>Book</span>
                    </Link>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-sm text-center">
                    <Link
                        to="/reports"
                        className="text-decoration-none text-dark d-flex flex-column align-items-center justify-content-center"
                    >
                        <FileEarmarkBarGraph className="mb-2" size={48} />
                        <span>Report</span>
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
                        className="text-decoration-none text-dark d-flex flex-column align-items-center justify-content-center"
                    >
                        <CalendarCheck className="mb-2" size={48} />
                        <span>Personal Info</span>
                    </Link>
                </div>
                <div className="col-sm text-center">
                    <Link
                        to="/booklist"
                        className="text-decoration-none text-dark d-flex flex-column align-items-center justify-content-center"
                    >
                        <Book className="mb-2" size={48} />
                        <span>Book</span>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default StaffDashboard;
