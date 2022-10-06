import axios from "axios";
import URL from "./API_URL";

const API_URL = URL + "/mahasiswa";

const login = (nim, password) => {
  return axios
    .post(API_URL + "/login", {
      nim,
      password,
    })
    .then((response) => {
    console.log(response);

      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  login,
  logout,
  getCurrentUser,
};

export default authService;