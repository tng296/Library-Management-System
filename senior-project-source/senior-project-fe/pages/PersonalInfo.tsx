import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

interface User {
    memberID: number;
    fName: string;
    lName: string;
    email: string;
    age: string;
    sex: string;
    DOB: string;
    status: string;
    hold: boolean;
    password?: string;
}

const PersonalInfo: React.FC = () => {
    const [listUser, setListUser] = useState<User[]>([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const getEmail = localStorage.getItem('email');
        try {
            const response = await axios.post('http://localhost:3000/personal', { data: { getEmail } });
            if (response.data && response.data.results) {
                setListUser(response.data.results);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="my-3 add-new">
                <span>
                    <b>Personal Info</b>
                </span>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                        <th>Status</th>
                        <th>Hold</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser.map((user, index) => (
                        <tr key={`user-${index}`}>
                            <td>{user.memberID}</td>
                            <td>{user.fName}</td>
                            <td>{user.lName}</td>
                            <td>{user.email}</td>
                            <td>{user.DOB}</td>
                            <td>{user.status}</td>
                            <td>{user.hold}</td>
                            <td>********</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default PersonalInfo;
