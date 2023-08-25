import React, { useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';

const AddTaskForm = () => {
  const taskNameRef = useRef();
  const taskDescriptionRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const newTask = {
        id: Date.now(),
        name: taskNameRef.current.value,
        description: taskDescriptionRef.current.value,
        completed: false,
      };
      dispatch(addTask(newTask));
      taskNameRef.current.value = '';
      taskDescriptionRef.current.value = '';
    },
    [dispatch]
  );

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Task name" ref={taskNameRef} />
        <input type="text" placeholder="Task description" ref={taskDescriptionRef} />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
