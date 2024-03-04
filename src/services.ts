import axios from "axios";

export const Api=axios.create({
    baseURL:"http://localhost:8000/api/",
    timeout:8000
})

export const ApiClima=axios.create({
    baseURL:"http://api.openweathermap.org/data/2.5/",
    timeout:8000
})