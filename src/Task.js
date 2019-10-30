import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { removeTask } from './actions.js'
import jQuery from 'jquery';

function Task({ name, description, priority, status, key,taskId, removeTask }) {
  return (
    <tr className='row100 body' data-task-id= { taskId }>
      <td className='cell100' style={{minWidth: '28%'}}> { name }  </td>
      <td className='cell100' style={{minWidth: '40%'}}> { description }  </td>
      <td className='cell100' style={{minWidth: '12%'}}> { status } </td>
      <td className='cell100' style={{minWidth: '12%'}}> { priority }  </td>
      <td className='cell100'> <img onClick={ () => animatedRemove(taskId, removeTask) } className='x-icon' src='../images/x-mark-3-32.ico' title='Delete' alt='Delete' data-task-id= { taskId } />  </td>
    </tr>
  );
}

function animatedRemove(taskId, removeTask) {
  return removeTask(taskId);
}

function mapDispathToProps(dispatch, ownProps) {
  return { removeTask }
}

export default connect(null, mapDispathToProps())(Task);
