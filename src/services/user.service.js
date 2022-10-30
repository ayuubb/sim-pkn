import axios from "axios";
import authHeader from "./auth-header";
import url from "./API_URL";

const API_URL_PORTOFOLIO = url + "/portofolio";
const API_URL_MAHASISWA = url + "/mahasiswa";
const API_URL_LAPORAN = url + "/laporan";

// const createUser = (data) => {
//   return axios.post(API_URL + "/", data, { headers: authHeader() });
// };

const getAllPortofolio = () => {
  return axios.get(API_URL_PORTOFOLIO + "/", { headers: authHeader() });
};

const getPortofolioById = (id) => {
  return axios.get(API_URL_PORTOFOLIO + `/${id}`, { headers: authHeader() });
};

const getMahasiswaById = (id) => {
  return axios.get(API_URL_MAHASISWA + `/${id}`, { headers: authHeader() });
};
const getLaporanById = (id) => {
  return axios.get(API_URL_LAPORAN + `/${id}`, { headers: authHeader() });
};

const getAllLaporan = () => {
  return axios.get(API_URL_LAPORAN + "/", { headers: authHeader() });
};

// const updateGuru = (data) => {
//   return axios.put(API_URL + "/update_guru", data, { headers: authHeader() });
// };

// const updateSiswa = (data) => {
//   return axios.put(API_URL + "/update_siswa", data, { headers: authHeader() });
// };

// const updateFotoProfil = (data) => {
//   return axios.put(API_URL + "/update_foto", data, { headers: authHeader() });
// };

// const updateCoin = (data) => {
//   return axios.put(API_URL + "/update_coin", data, { headers: authHeader() });
// };

// const deleteUser = (data) => {
//   return axios.delete(API_URL + "/", { headers: authHeader(), data });
// };

// const deleteAllUserByIdAngkatan = (data) => {
//   return axios.delete(API_URL + "/deleteByIdAngkatan", {
//     headers: authHeader(),
//     data,
//   });
// };

const userService = {
  getAllPortofolio,
  getPortofolioById ,
  getMahasiswaById ,
  getLaporanById,
  getAllLaporan
  // createUser,
  // updateGuru,
  // updateSiswa,
  // updateFotoProfil,
  // updateCoin,
  // deleteUser,
  // deleteAllUserByIdAngkatan,
};

export default userService;
