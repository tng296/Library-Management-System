import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';

const Header: React.FC = () => {

    const getEmail = localStorage.getItem('email');
    const email = getEmail?.split('@')[0];
    const handleLogout = async () => {
        localStorage.removeItem('email');
        const cookies = new Cookies();
        cookies.remove('token', { path: '/' });
        cookies.remove('email', { path: '/' });
        toast.success('Logout successful');
    }

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className='nav-link'>
                            Central Library
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" activeKey="/users">
                            <Link to="/member-introduction" className="nav-link">Member</Link>
                            <Link to="/simplesearch" className="nav-link">Book</Link>
                            <NavDropdown title="Services" id="basic-nav-dropdown">
                                <NavDropdown.Item >
                                    <Link to="/passport" className="nav-link">Citizenships & Passports</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/studyroom" className="nav-link">
                                        Study Room Reservation
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/movie-search" className="nav-link">Movie Search Engine</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className="ml-left">
                            <NavDropdown title={`Hello, ${email}`} id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link to="/login" className="nav-link">
                                        Personal Info
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/" className="nav-link" onClick={handleLogout}>Logout</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>);
};

export default Header;
