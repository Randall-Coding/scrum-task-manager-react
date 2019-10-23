import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { removeTask } from './actions.js'

function Task({ name, description, priority, status, taskId, removeTask }) {
  return (
    <tr className='row100 body' data-task-id= { taskId }>
      <td className='cell100'> { name }  </td>
      <td className='cell100'> { description }  </td>
      <td className='cell100'> { status } </td>
      <td className='cell100'> { priority }  </td>
      <td className='cell100'> <img onClick={ () => removeTask(taskId) } className='x-icon' src='../images/x-mark-3-32.ico' title='Delete' alt='Delete' data-task-id= { taskId }/>  </td>
    </tr>
  );
}

function mapDispathToProps(dispatch, ownProps) {
  return { removeTask }
}

export default connect(null, mapDispathToProps())(Task);
