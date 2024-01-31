import axios from './customizedAxios';


const fetchAllUser = () => {
    return axios.get("/api/users?page=2");
}
export { fetchAllUser }