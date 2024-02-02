import axios from './customizedAxios';


const fetchAllUser = (page: number) => {
    return axios.get("/api/users?page=" + page);
}
const postUser = (email: string, password: string) => {
    return axios.post("/api/users", { email, password });
}
export { fetchAllUser, postUser }