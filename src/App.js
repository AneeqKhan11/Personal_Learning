import React from 'react';
import { Provider } from 'react-redux';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Task Management App</h1>
        <AddTaskForm />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
