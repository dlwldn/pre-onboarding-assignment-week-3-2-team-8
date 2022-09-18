import axios from "axios";

const BASE_API_URL = 'http://localhost:4000';

const baseAPI = axios.create({
  baseURL: BASE_API_URL
})

export default baseAPI;