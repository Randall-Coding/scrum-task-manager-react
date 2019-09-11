import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList';

ReactDOM.render(
  <React.Fragment>
    <h1> This is the task count {tasks.length} </h1>
    <TaskList>
    </TaskList>
  </React.Fragment>,
  document.getElementById('app')
);
