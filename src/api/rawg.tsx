import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/games",
});

const apiKey = "952d287c927344c9bf73dc7afd0ab555"