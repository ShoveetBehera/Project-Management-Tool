// frontend/src/components/GanttChart/GanttChart.js
import React from 'react';
import Gantt from 'react-gantt-chart';

const MyGanttChart = ({ tasks }) => {
  const data = tasks.map(task => ({
    id: task._id,
    name: task.title,
    start: new Date(task.createdAt).getTime(),
    end: new Date(task.dueDate).getTime(),
    progress: task.status === 'done' ? 100 : 0,
  }));

  return <Gantt data={data} />;
};

export default MyGanttChart;