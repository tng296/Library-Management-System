import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import '../styles/LoginPage.css';
import { Link } from 'react-router-dom';

interface ILogin {
    email: string;
    password: string;
}

const AdminLoginPage: React.FC = () => {

    const [login, setLogin] = useState<ILogin>({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const submitLoginCredentials = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/login', { data: { email: login.email, password: login.password } });
        if (res && res.data) {
            if (res.data.roleID === 1) {
                navigate(`AdminDashboard`);
            } else if (res.data.roleID === 2) {
                navigate(`/StaffDashboard`);
            }
            else if (res.data.roleID === 3) {
                navigate(`/MemberDashboard`);
            }
            else {
                alert('Invalid credentials');
            }
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form action="">
                <div className="form-control">
                    <input onChange={handleLogin} type="text" placeholder="email" name="email" />
                </div>
                <div>
                    <input onChange={handleLogin} type="text" placeholder="password" name="password" />
                </div>
                <button onClick={submitLoginCredentials} type="submit">Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="/register">Register</a></p>
                </div>
            </form>

        </div>
    );
};

export default AdminLoginPage;