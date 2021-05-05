import axios from 'axios';

const getRandomEmployee = () => {
    return axios.get("https://randomuser.me/api/?results=15&?nat=us")
}

export default getRandomEmployee;