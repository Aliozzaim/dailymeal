import axios from "axios"
const acsiosClient = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1",
})

export default acsiosClient
