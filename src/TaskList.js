import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

// class TaskList extends React.Component {
//   render() {
//     return <div className="task-list-container">  Mission success </div>;
//   }
// }
// const header = {}

function TaskList({ tasks = [] }) {
  var rows = [];
  console.log(tasks);
  tasks.forEach(function (task) {
    console.log(task);
    rows.push(<tr><td>{ task.name }</td></tr>);

    // console.log(ReactDOMServer.renderToString(rows));
  });

  console.log(rows);

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
