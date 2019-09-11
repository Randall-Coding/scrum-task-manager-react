import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import Task from './Task'
// class TaskList extends React.Component {
//   render() {
//     return <div className="task-list-container">  Mission success </div>;
//   }
// }
// const header = {}

function TaskList({ tasks = [] }) {
  var rows = [];
  tasks.forEach(function(task) {
    rows.push(<Task name={ task.name } description={ task.description } priority={ task.priority } status={ task.status }/>)
  });

  // console.log(rows);
  // console.log(ReactDOMServer.renderToString(rows));

  return (
    <React.Fragment>
      <table id='tasklist'>
        <thead></thead>
        <tbody>
          { rows }
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default TaskList;
