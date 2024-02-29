import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import ModalAddNew from './ModalAddNew';
import ModalEditUser from './ModalEditUser';
import ModalConfirm from './ModalConfirm';
import _, { set } from "lodash";

interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    age: string;
    sex: string;
    DOB: string;
    status: string;
    hold: string;
}

const TableUsers: React.FC = () => {
    const [listUser, setListUser] = useState<User[]>([]);
    useEffect(() => {
        getUsers();
    }, []);
    const [isShownModalAddNew, setIsShownModalAddNew] = useState(false);
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [isShownModalEdit, setIsShownModalEdit] = useState(false);
    const [userEdit, setUserEdit] = useState<User>({} as User);
    const [userDelete, setUserDelete] = useState<User>({} as User);

    const handleClose = () => {
        setIsShownModalAddNew(false);
        setIsShownModalEdit(false);
        setIsShowModalDelete(false);
    }
    const handleAddingNewUser = (user: User) => {
        setListUser([user, ...listUser]);
    }
    const getUsers = async () => {

        await axios.get('http://localhost:3000').then((res) => {
            setListUser(res.data);
        }).catch(err => console.log(err));

    }
    const handleEditUser = (user: User) => {
        setUserEdit(user);
        setIsShownModalEdit(true);
    }

    const handleEditUserfromModal = (user: User) => {
        let cloneListUser = _.cloneDeep(listUser);
        let index = listUser.findIndex((item) => item.id === user.id);
        cloneListUser[index].email = user.email;
        cloneListUser[index].first_name = user.first_name;
        cloneListUser[index].last_name = user.last_name;
        setListUser(cloneListUser);
    }
    const handleDelete = (user: User) => {
        setIsShowModalDelete(true);
        setUserDelete(user);
    }

    const handleDeleteUserFromModal = (user: User) => {
        let cloneListUser = _.cloneDeep(listUser);
        cloneListUser = cloneListUser.filter((item) => item.id !== user.id);
        setListUser(cloneListUser);
    }

    console.log(listUser)

    const handlePageClick = () => { }

    return (
        <>
            <div className="my-3 add-new">
                <span>
                    <b>Member List</b>
                </span>
                <button className="btn btn-primary" onClick={() => setIsShownModalAddNew(true)}>Add New Member</button>
            </div>
            {/* Table component */}

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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Render  each user */}
                    {listUser && listUser.length > 0 && listUser.map((user, index) => {
                        return (
                            <tr key={`user-${index}`}>
                                <td>{user.memberID}</td>
                                <td>{user.fName}</td>
                                <td>{user.lName}</td>
                                <td>{user.email}</td>
                                <td>{user.DOB}</td>
                                <td>{user.status}</td>
                                <td>{user.hold}</td>
                                <td>
                                    <button className="btn btn-danger mx-3" onClick={() => handleDelete(user)} >Delete</button>
                                    <button className="btn btn-warning" onClick={() => handleEditUser(user)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            <ModalAddNew show={isShownModalAddNew} handleClose={handleClose} handleAddingNewUser={handleAddingNewUser} />
            <ModalEditUser show={isShownModalEdit} handleClose={handleClose} userEdit={userEdit} handleEditUserfromModal={handleEditUserfromModal} />
            <ModalConfirm show={isShowModalDelete} handleClose={handleClose} userDelete={userDelete} handleDeleteUserFromModal={handleDeleteUserFromModal} />

        </>
    );
};

export default TableUsers;
