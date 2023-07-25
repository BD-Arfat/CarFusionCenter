// import axios from "axios";

import axios from "axios"

const axiosInstance = axios.create({
  baseURL: 'https://car-shops-server-bd-arfat.vercel.app/'
})

export default axiosInstance