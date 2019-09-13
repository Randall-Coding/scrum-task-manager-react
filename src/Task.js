import React from 'react';
import ReactDOM from 'react-dom';

function Task({ name, description, priority, status }) {
  return (
    <tr className='row100 body'>
      <td className='cell100'> { name }  </td>
      <td className='cell100'> { description }  </td>
      <td className='cell100'> { status } </td>
      <td className='cell100'> { priority }  </td>
    </tr>
  );
}

export default Task
