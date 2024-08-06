import axios from "axios";

export const AxiosFetch = axios.create({
    baseURL: "http://localhost:8080"
})
