import React from 'react';
import ReactDOM from 'react-dom';

function Task({ name, description, priority, status, taskId }) {
  return (
    <tr className='row100 body' data-task-id= { taskId }>
      <td className='cell100'> { name }  </td>
      <td className='cell100'> { description }  </td>
      <td className='cell100'> { status } </td>
      <td className='cell100'> { priority }  </td>
      <td className='cell100'> <img className='x-icon' src='../images/x-mark-3-32.ico' title='Delete' alt='Delete' data-task-id= { taskId }/>  </td>
    </tr>
  );
}

export default Task
