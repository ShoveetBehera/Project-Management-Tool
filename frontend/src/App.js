// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
// In a suitable component like App.js or KanbanBoard.js
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Update with your server address

useEffect(() => {
    socket.on('taskUpdated', (task) => {
        alert(`Task "${task.title}" was updated!`); 
        // Optionally, trigger a refresh of tasks 
    });

    return () => {
        socket.off('taskUpdated'); // Cleanup the connection
    };
}, []);

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;