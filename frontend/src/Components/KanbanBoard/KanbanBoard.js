// frontend/src/components/KanbanBoard/KanbanBoard.js
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useAuth } from '../../context/AuthContext';
import Task from './Task';

const KanbanBoard = ({ tasks }) => {
    const { state } = useAuth();

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const newTasks = Array.from(tasks);
        const [removed] = newTasks.splice(result.source.index, 1);
        newTasks.splice(result.destination.index, 0, removed);

        // Update task status in the backend if needed
        // Optionally make an API call to update the task's new status/position

        setTasks(newTasks); // Remember to use state management to maintain tasks.
    };

    const sections = {
        todo: tasks.filter(task => task.status === 'todo'),
        inProgress: tasks.filter(task => task.status === 'in-progress'),
        done: tasks.filter(task => task.status === 'done'),
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="kanban-board">
                {Object.entries(sections).map(([key, sectionTasks]) => (
                    <Droppable droppableId={key} key={key}>
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="column"
                            >
                                <h2>{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
                                {sectionTasks.map((task, index) => (
                                    <Draggable key={task._id} draggableId={task._id} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <Task task={task} />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
    );
};

export default KanbanBoard;