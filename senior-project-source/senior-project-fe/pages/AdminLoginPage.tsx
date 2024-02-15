import React, { useState } from 'react';
import axios from 'axios';
import '../styles/LoginPage.css';
import { Link } from 'react-router-dom';

interface ILogin {
    username: string;
    password: string;
}

const AdminLoginPage: React.FC = () => {
    const [login, setLogin] = useState<ILogin>({
        username: '',
        password: ''
    });

    const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    }

    const submitLoginCredentials = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (login.username === 'admin' && login.password === 'admin') {
            window.location.href = "/admin-dashboard";
        }
        else if (login.username === 'staff' && login.password === 'staff') {
            window.location.href = "/staff-dashboard";
        }
        else if (login.username === 'member' && login.password === 'member') {
            window.location.href = "/member-dashboard";
        }
        else {
            alert('Invalid username or password');
        }
        // try {
        //     const response = await axios.post('url go here', login);
        //     console.log(response);
        // } catch (error) {
        //     console.log(error);
        // }
    }
    console.log(login.username);
    return (
        <div className="login-container">
            <h1>Login</h1>
            <form action="">
                <div className="form-control">
                    <input onChange={handleLogin} type="text" placeholder="username" name="username"/>
                </div>
                <div>
                    <input onChange={handleLogin} type="password" placeholder="password" name="password" />
                </div>
                <button onClick={submitLoginCredentials} type="submit">Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="/register">Register</a></p>
                </div>
            </form>

        </div>
    );
};

export default AdminLoginPage
