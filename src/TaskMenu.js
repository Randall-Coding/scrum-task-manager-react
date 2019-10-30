import React from 'react';
import ReactDOM from 'react-dom';
import AddButton from './AddButton';
import { connect } from 'react-redux'
import stores from './store.js';
import { addTask } from './actions.js';

export function TaskMenu({ addTask: addTask }) {
  return (
      <div id='taskmenu'>
        <div style={{display: 'table-row'}}>
        <span className=""></span>
        <span className="header title"> Add a new task </span>
        </div>
        <div style={{display: 'table-row'}}>
            <span className='header'> Task Name </span>
            <span style={{width: '40%'}} className='header'> Description </span>
            <span htmlFor='priority' placeholder='Priority' className='header'> Priority </span>
            <div className='header'>  </div>
        </div>
        <div style={{display: 'table-row'}}>
          <div className='header'> <input type='text' name='name' placeholder='Task Name'/> </div>
          <div className='header' style={{width: '40%'}}>  <input type='text' name='description' placeholder='Description' /> </div>
          <div className='header'>
            <select name='priority' placeholder='Priority'>
              <option value='High'> High </option>
              <option value='Medium'> Medium </option>
              <option value='Low'> Low </option>
            </select>
          </div>
          <div className='header'> <button onClick = {() => animateAddTask(addTask)} id="add-button"  className='add'> Add task  </button> </div>
        </div>
      </div>
    );
}

function animateAddTask(addTask) {
  var name = document.querySelector('#taskmenu input[name="name"]').value
  var description = document.querySelector('#taskmenu input[name="description"]').value
  var priority = document.querySelector('#taskmenu select[name="priority"]').value
  var task =   {
      name: name,
      description: description,
      priority: priority,
      status: 'Open',
      taskId: null,
      key: null,
    }
  addTask(task)
}

export default connect(null, { addTask })(TaskMenu);
