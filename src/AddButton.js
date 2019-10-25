import React from 'react';
import ReactDOM from 'react-dom';
import store from './store.js';
import { addTask } from './actions.js';

export function AddButton() {
  // task = {
  //   name: store.getState().newTask.name,
  //   description: store.getState().newTask.description,
  //   priority: store.getState().newTask.priority,
  //   status: 'Open',
  //   taskId: '7',
  //   key: '7',
  // }
  return (
    <button onClick={() => addTask()} className='add'> Add task  </button>
  );
}

export default AddButton;
