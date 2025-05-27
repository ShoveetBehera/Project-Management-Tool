// frontend/src/components/GanttChart.js
import React from 'react';
import GanttChart from 'react-gantt-chart';

const Gantt = ({ tasks }) => {
  const data = tasks.map(task => ({
    id: task._id,
    name: task.title,
    start: task.createdAt,
    end: task.dueDate, // Assume you added dueDate to your task model
    progress: 0,
  }));

  return (
    <GanttChart data={data} />
  );
};

export default Gantt;