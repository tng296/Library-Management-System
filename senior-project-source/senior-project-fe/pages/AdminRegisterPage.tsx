import React, { useState } from 'react';
import axios from 'axios';
import '../styles/RegisterPage.css';
import passwordValidation from '../helper/PasswordValidation.ts'

interface IRegister {
    newUsername: string;
    newPassword: string;
    retypePassword: string;
    sex: string;
    age: string;
    email: string;
    position?: string;
}

const AdminRegisterPage: React.FC = () => {
    const [register, setRegister] = useState<IRegister>({
        newUsername: "",
        newPassword: "",
        retypePassword: "",
        sex: "",
        age: "",
        email: "",
        position: ""
    });

    const handleRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegister({ ...register, [e.target.name]: e.target.value });
    }

    const submitRegisterCredentials = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (passwordValidation(register.newPassword, register.retypePassword) === false) {
            console.log("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character");
            return;
        }
        else if (register.newPassword !== register.retypePassword) {
            console.log("Password does not match");
            return;
        }
        else {
            try {
                const response = await axios.post('url go here', register);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form action="">
                <div className="form-control">
                    <input onChange={handleRegister} type="text" placeholder="username" />
                </div>
                <div>
                    <input onChange={handleRegister} type="password" placeholder="password" />
                </div>
                <div>
                    <input onChange={handleRegister} type="password" placeholder="reenter password" />
                </div>
                <div>
                    <input onChange={handleRegister} type="text" placeholder="sex" />
                </div>
                <div>
                    <input onChange={handleRegister} type="text" placeholder="age" />
                </div>
                <div>
                    <input onChange={handleRegister} type="text" placeholder="email" />
                </div>
                <div>
                    <input onChange={handleRegister} type="text" placeholder="position" />
                </div>
                <button onClick={submitRegisterCredentials} type="submit">Register</button>
                <div className="register-link">
                    <p>Already have an account? <a href="/login">Login</a></p>
                </div>
            </form>

        </div>
    );
};

export default AdminRegisterPage
