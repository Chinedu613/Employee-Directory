import axios from 'axios';

const getEmployees = () => {
    return axios.get("https://randomuser.me/api/?results=15&nat=us&seed=abc")
}

export default getEmployees;