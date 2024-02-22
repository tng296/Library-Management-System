import { first } from 'lodash';
import axios from './customizedAxios';


const fetchAllUser = (page: number) => {
    return axios.get("/api/users?page=" + page);
}
const postUser = (email: string, password: string, first_name: string, last_name: string) => {
    return axios.post("/api/users", { email, password, first_name, last_name });
}

const updateUser = (email: string, password: string, first_name: string, last_name: string) => {
    return axios.put("/api/users/2", { email, password, first_name, last_name });
}

const deleteUser = (id: number) => {
    return axios.delete(`/api/users/${id}`);
}
export { fetchAllUser, postUser, updateUser, deleteUser }