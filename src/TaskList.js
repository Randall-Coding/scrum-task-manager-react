import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import Task from './Task'

function TaskList({ tasks = [] }) {

  var rows = [];
  tasks.forEach(function(task) {
    rows.push(<Task name={ task.name } description={ task.description } priority={ task.priority } status={ task.status }/>)
  });

  var headers = [];
  for (var key in tasks[0]) {
    headers.push(<th> { key[0].toUpperCase() + key.slice(1) } </th>)   //capitalize
  }

  return (
    <React.Fragment>
      <table id='tasklist'>
        <thead>
          { headers }
        </thead>
        <tbody>
          { rows }
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default TaskList;
