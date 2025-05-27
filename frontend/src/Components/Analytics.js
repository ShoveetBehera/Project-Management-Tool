// frontend/src/components/Analytics.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const Analytics = ({ tasks }) => {
    const data = {
        labels: ['Todo', 'In Progress', 'Done'],
        datasets: [
            {
                label: 'Task Count',
                data: [
                    tasks.filter(task => task.status === 'todo').length,
                    tasks.filter(task => task.status === 'in-progress').length,
                    tasks.filter(task => task.status === 'done').length,
                ],
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)'],
            },
        ],
    };

    return <Bar data={data} />;
};

export default Analytics;