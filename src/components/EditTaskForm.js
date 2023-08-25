import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/actions/taskActions';

const EditTaskForm = ({ task }) => {
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const updatedTask = {
      ...task,
      name,
      description,
    };
    dispatch(editTask(updatedTask));
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditTaskForm;
