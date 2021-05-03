import axios from 'axios';

const getRandomEmployee = () => {
    return axios.get("https://randomuser.me/api/")
}

export default getRandomEmployee