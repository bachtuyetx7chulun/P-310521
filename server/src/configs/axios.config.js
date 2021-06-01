import axios from "axios";

export const axiosForYoutube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/channels?",
});

export const axiosForGithub = axios.create({
  baseURL: "https://api.github.com/",
});
