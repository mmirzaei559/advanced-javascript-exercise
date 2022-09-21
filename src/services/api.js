import axios from "axios";

export const baseURL = 'https://jsonplaceholder.typicode.com/';

export const fetchData = async query => {

    const url = `${baseURL}${query}`;

    return await axios.get(url);
};