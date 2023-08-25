import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTask, deleteTask } from '../redux/actions/taskActions';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(completeTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
      <button onClick={handleComplete}>Complete</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
