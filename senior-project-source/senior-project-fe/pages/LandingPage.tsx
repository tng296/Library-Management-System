import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const LandingPage: React.FC = () => {
    return (
        <div>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://images.unsplash.com/photo-1577985051167-0d49eec21977?q=80&w=1489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Welcome to Central Library</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://images.unsplash.com/photo-1598153346810-860daa814c4b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Harry Potter</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Lord of The Rings</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://plus.unsplash.com/premium_photo-1676776906360-098c7dd38c2b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Ender's Game</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div>
                <h1>Our Mission</h1>
                <p>Our mission is to provide a safe and welcoming environment for all students, faculty, and staff. We strive to provide resources and services that support the academic and research needs of the university community. We are committed to providing a wide range of materials and services to meet the needs of our diverse community. We are dedicated to providing a comfortable, well-maintained facility with up-to-date technology and access to a wide variety of resources. We are committed to providing a wide range of materials and services to meet the needs of our diverse community. We are dedicated to providing a comfortable, well-maintained facility with up-to-date technology and access to a wide variety of resources.</p>
            </div>
        </div>
    );
}

export default LandingPage;
