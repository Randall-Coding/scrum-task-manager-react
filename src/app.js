import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList';
import Progress from './Progress'
import axios from 'axios';

const sprintName = 'Q5';
axios.get('tasks.json').then(response => {
  const list = response.data;
  const percentComplete = calculateProgress(list);

  ReactDOM.render(
    <React.Fragment>
      <h1> Sprint: { sprintName } </h1>
      <Progress percentComplete={ percentComplete }/>
      <TaskList tasks={ list }/>
    </React.Fragment>,
    document.getElementById('app')
  );
});

function calculateProgress(tasks) {
  const total = tasks.length
  var closed = 0;
  tasks.forEach(task => {
    if (task.status.toLowerCase() == 'closed') {
      closed++;
    }
  });
  return (closed / total) * 100;
}
