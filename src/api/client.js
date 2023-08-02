import axios from "axios";

const client = axios.create({
    baseURL:process.env.REACT_APP_API_BASE_URL, //cambiar esto cuando suba al servidor
});

client.interceptors.response.use (response => response.data);
console.log(client)
export default client;

