import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList';
import Progress from './Progress'
import axios from 'axios';

const sprintName = 'Q5';
axios.get('tasks.json').then(response => {
  const list = response.data;
  console.log(list);
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
  console.log(total);
  var closed = 0;
  tasks.forEach(task => {
    if (task.status.toLowerCase() == 'closed') {
      closed++;
    }
  });
  // const statusList = tasks.map(task => { return task.status; })
  return (closed / total) * 100;
}
