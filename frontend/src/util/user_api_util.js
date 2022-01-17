import axios from "axios";



export const getUsers = () => {
      return axios.get('./api/users');
}

export const getUser = (userId) => {
      return axios.get(`api/users/${userId}`);
}

export const editUser = (user) => {
      return axios.patch(`api/users/${user.id}`, user)
}

