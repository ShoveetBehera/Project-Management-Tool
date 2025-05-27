// frontend/src/api/index.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
});

export const registerUser = async (userData) => {
    return await api.post('/auth/register', userData);
};

export const loginUser = async (userData) => {
    return await api.post('/auth/login', userData);
};

export const createTask = async (taskData, token) => {
    return await api.post('/tasks', taskData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const getTasks = async (token) => {
    return await api.get('/tasks', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

// Additional API functions...