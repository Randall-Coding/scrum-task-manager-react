import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList';
import axios from 'axios';

const sprintName = 'Q5';
//https://raw.githubusercontent.com/Randall-Coding/misc/master/tasks.json
axios.get('tasks.json').then(response => {
  const list = response.data;
  console.log(list);
  ReactDOM.render(
    <React.Fragment>
    <h1> Sprint: { sprintName } </h1>
    <h2> This is the task count {list.length} + {list[0].priority} </h2>
    <TaskList tasks={ list }>
    </TaskList>
    </React.Fragment>,
    document.getElementById('app')
  );
});
