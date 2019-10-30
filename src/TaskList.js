import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';
import { removeTask } from './actions.js';
import { connect } from 'react-redux';
import { sampleTask } from './samples.js';

export function TaskList({ tasks = [] }) {
  // Make rows
  var rows = [];
  tasks.forEach(function(task) {
    rows.push(<Task name={ task.name } description={ task.description } priority={ task.priority } status={ task.status } key={ task.taskId } taskId={task.taskId} removeTask= { removeTask }/>)
  });

  // Make headers
  var headers = [];
  for (var key in sampleTask) {
    if (key != 'taskId' && key != 'key') {
      headers.push(<th className='cell100' key={ key } className={ key }> { key[0].toUpperCase() + key.slice(1) }</th>)   // Capitalize
    }
  }
  headers.push(<th className='cell100' key='spacer' className='cancel'> </th>)

  return (
    <React.Fragment>
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

function mapStateToProps(state) {
  return {tasks: state.tasks}
}

export default connect(mapStateToProps,null)(TaskList)
