import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import Task from './Task'

function TaskList({ tasks = [] }) {

  var rows = [];
  tasks.forEach(function(task) {
    rows.push(<Task name={ task.name } description={ task.description } priority={ task.priority } status={ task.status } taskId = { task.taskId }/>)
  });

  var headers = [];
  for (var key in tasks[0]) {
    if (key != 'taskId') {
      headers.push(<th className='cell100'>{ key[0].toUpperCase() + key.slice(1) }</th>)   // Capitalize
    }
  }

  return (
    <React.Fragment>
    <div> Add task </div>
    <div className='table100 ver1 m-b-110'>
		  <div className='table100-head'>
        <table id='tasklist-header'>
          <thead>
            <tr className='row100 head'>{ headers }</tr>
          </thead>
        </table>
      </div>
      <div className='table100-body js-pscroll'>
        <table id='tasklist'>
          <tbody>
            { rows }
          </tbody>
        </table>
      </div>
    </div>
    </React.Fragment>
  );
}

export default TaskList;
