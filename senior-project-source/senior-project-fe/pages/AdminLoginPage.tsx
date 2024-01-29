import React, { useState } from 'react';
import axios from 'axios';
import '../styles/LoginPage.css';

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
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const submitLoginCredentials = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('url go here', login);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form action="">
                <div className="form-control">
                    <input onChange={handleLogin} type="text" placeholder="username" />
                </div>
                <div>
                    <input onChange={handleLogin} type="password" placeholder="password" />
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
