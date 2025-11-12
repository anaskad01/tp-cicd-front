import axios from 'axios';

const api = axios.create({
  baseURL: 'https://library-master-3azo.onrender.com', // will call relative endpoints like /authors, /books, etc.
});

export default api;
