import React, { useState } from 'react';
import axios from 'axios';
import '../styles/RegisterPage.css';
import PasswordValidation from '../helper/PasswordValidation.ts'

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


    const submitRegisterCredentials = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log("new password:", register.newPassword)
        if (!PasswordValidation(register.newPassword)) {
            console.log("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character");
        }
        else {
            if (register.newPassword !== register.retypePassword) {
                console.log("Password does not match");
                return;
            }
            else {
                try {
                    const response = axios.post('url go here', register);
                    console.log(response);
                } catch (error) {
                    console.log(error);
                }
            }
        }

    }

    return (
        <div className="login-container">
            <h1>Register</h1>
            <form action="">
                <div className="form-control">
                    <input onChange={handleRegister} type="text" placeholder="username" name="newUsername" />
                </div>
                <div>
                    <input onChange={handleRegister} type="text" placeholder="password" name="newPassword" />
                </div>
                <div>
                    <input onChange={handleRegister} type="text" placeholder="reenter password" name="retypePassword" />
                </div>
                <div>
                    <input onChange={handleRegister} type="text" placeholder="sex" name="sex" />
                </div>
                <div>
                    <input onChange={handleRegister} type="text" placeholder="age" name="age" />
                </div>
                <div>
                    <input onChange={handleRegister} type="text" placeholder="email" name="email" />
                </div>
                <div>
                    <input onChange={handleRegister} type="text" placeholder="position" name="position" />
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
