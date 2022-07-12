import axios from "../api/axios";

const userServices = {
    getAllUsers: () => {
        return axios.get(`/users`);
    },
};

export default userServices;
