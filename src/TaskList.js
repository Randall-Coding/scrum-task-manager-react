import React from 'react';
import ReactDOM from 'react-dom';

// class TaskList extends React.Component {
//   render() {
//     return <div className="task-list-container">  Mission success </div>;
//   }
// }

function TaskList({ tasks = [] }) {
  return (
    <React.Fragment>
      <table id="tasklist">
        <thead></thead>
        <tbody>
          <tr id={1}><td></td></tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default TaskList;
