// frontend/src/components/Task.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill'; // This will give a rich text editor

const Task = ({ task }) => {
    const [description, setDescription] = useState(task.description || '');

    const handleDescriptionChange = (value) => {
        setDescription(value);
    };

    return (
        <div className="task">
            <h4>{task.title}</h4>
            <ReactQuill value={description} onChange={handleDescriptionChange} />
            {/* Add buttons to save/comment based on your requirement */}
        </div>
    );
};

export default Task;