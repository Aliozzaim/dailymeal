import axios from "axios"
const acsiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

export default acsiosClient
