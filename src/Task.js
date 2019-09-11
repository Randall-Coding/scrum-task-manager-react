import React from 'react';
import ReactDOM from 'react-dom';

function Task({ name, description, priority, status }) {
  return (
    <tr>
      <td> { name }  </td>
      <td> { description }  </td>
      <td> { status } </td>
      <td> { priority }  </td>
    </tr>
  );
}
