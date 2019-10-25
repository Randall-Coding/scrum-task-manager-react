import React from 'react';
import ReactDOM from 'react-dom';
import AddButton from './AddButton';
import stores from './store.js';
import { addTask } from './actions.js';

export function TaskMenu() {
  return (
      <div id='taskmenu'>
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
          <div className='header'> <AddButton addTask = { addTask } > </AddButton> </div>
        </div>
      </div>
    );
}

export default TaskMenu;
