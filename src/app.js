import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList';
import Progress from './Progress'
import axios from 'axios';

const sprintName = 'Q5';
axios.get('tasks.json').then(response => {
  const list = response.data;
  console.log(list);
  const percentComplete = 70;

  ReactDOM.render(
    <React.Fragment>
      <h1> Sprint: { sprintName } </h1>
      <h2> This is the task count {list.length} + {list[0].priority} </h2>
      <Progress percentComplete={ percentComplete }/>
      <TaskList tasks={ list }/>
    </React.Fragment>,
    document.getElementById('app')
  );
});

function calculateProgress({ tasks }) {
  return 70;
}
