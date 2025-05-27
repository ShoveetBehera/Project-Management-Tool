// frontend/src/context/AuthContext.js
import React, { createContext, useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser } from '../api';

const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload.user, token: action.payload.token };
        case 'LOGOUT':
            return { ...state, user: null, token: null };
        default:
            return state;
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { user: null, token: null });
    const navigate = useNavigate();

    const login = async (userData) => {
        const response = await loginUser(userData);
        const { token, user } = response.data;
        dispatch({ type: 'LOGIN', payload: { token, user } });
        localStorage.setItem('authToken', token);
        navigate('/');
    };

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ state, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);