import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNew';
import ModalEditUser from './ModalEditUser';
import { fetchAllUser } from '../services/UserService';

interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
}

const TableUsers: React.FC = (props) => {
    const [listUser, setListUser] = useState<User[]>([]);
    useEffect(() => {
        getUsers();
    }, []);
    const [isShownModalAddNew, setIsShownModalAddNew] = useState(false);
    const [isShownModalEdit, setIsShownModalEdit] = useState(false);
    const [userEdit, setUserEdit] = useState<User>({} as User);

    const handleClose = () => {
        setIsShownModalAddNew(false);
    }
    const handleAddingNewUser = (user: User) => {
        setListUser([user, ...listUser]);
    }
    const getUsers = async () => {
        let res = await fetchAllUser(1);
        console.log(">>>check new re:", res);
        if (res && res.data) {
            setListUser(res.data);
        }
    }
    const handleEditUser = (user: User) => {
        console.log(">>>check user:", user);
        setUserEdit(user);
        setIsShownModalEdit(true);
    }

    console.log(listUser);

    const handlePageClick = () => { }

    return (
        <>
            <div className="my-3 add-new">
                <span>
                    <b>List User:</b>
                </span>
                <button className="btn btn-primary" onClick={() => setIsShownModalAddNew(true)}>Add new user</button>
            </div>
            {/* Table component */}

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Render each user */}
                    {listUser && listUser.length > 0 && listUser.map((user, index) => {
                        return (
                            <tr key={`user-${index}`}>
                                {/* User ID */}
                                <td>{user.id}</td>
                                {/* User Email */}
                                <td>{user.email}</td>
                                {/* User First Name */}
                                <td>{user.first_name}</td>
                                {/* User Last Name */}
                                <td>{user.last_name}</td>
                                <td>
                                    <button className="btn btn-danger mx-3" >Delete</button>
                                    <button className="btn btn-warning" onClick={() => handleEditUser(user)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            <ModalAddNew show={isShownModalAddNew} handleClose={handleClose} handleAddingNewUser={handleAddingNewUser} />
            <ModalEditUser show={isShownModalEdit} handleClose={handleClose} />

        </>
    );
};

export default TableUsers;
