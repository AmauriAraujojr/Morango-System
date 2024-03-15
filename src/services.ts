import axios from "axios";

export const Api=axios.create({
    baseURL:"https://system-irrigation.onrender.com/api/",
    timeout:8000
})

export const ApiClima=axios.create({
    baseURL:"http://api.openweathermap.org/data/2.5/",
    timeout:8000
})