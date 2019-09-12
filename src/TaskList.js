import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import Task from './Task'

function TaskList({ tasks = [] }) {
  var rows = [];
  tasks.forEach(function(task) {
    rows.push(<Task name={ task.name } description={ task.description } priority={ task.priority } status={ task.status }/>)
  });

  return (
    <React.Fragment>
      <table id='tasklist'>
        <thead></thead>
        <tbody>
          { rows }
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default TaskList;
