import axios from 'axios'

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export const logIn= (formData)=> API.post('/auth/login',formData);

export const signUp = (formData) => API.post('/auth/register', formData);
