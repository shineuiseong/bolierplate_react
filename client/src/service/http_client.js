import axios from 'axios'

const API_DEV = 'http://localhost:9000/api/'
// const API_PRODUCT = 'https://api.holaworld.io/api/'
//const baseURL = process.env.NODE_ENV === 'development' ? API_DEV : API_PRODUCT
const httpClient = axios.create({
  baseURL: API_DEV,
  withCredentials: true,
})
export default httpClient
