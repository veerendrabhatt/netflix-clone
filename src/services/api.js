import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const instance = axios.create({
  baseURL: "https://www.omdbapi.com/",
});

export const fetchBySearch = (searchTerm) =>
  instance.get(`?apikey=${API_KEY}&s=${searchTerm}`);
console.log("OMDB KEY:", API_KEY);

export default instance;
