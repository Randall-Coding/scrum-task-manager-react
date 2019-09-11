import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList';

const list = [
  {
    name: 'Header bar needs to fill screen',
    description: 'Header bar is showing some of the background on the left side of the screen.  Needs to fill space to edge of browser',
    priority: 'Medium',
    status: 'Open',
  },
  {
    name: 'Filter calls returning incorrect values for custom date range',
    description: 'Limiting to a single month is showing values for upcoming month as well',
    priority: 'Medium',
    status: 'Open',
  },
  {
    name: 'Add organize by column feature for list',
    description: 'Clicking on a column should organize by that column and re-load the list',
    priority: 'High',
    status: 'Open',
  },
  {
    name: 'Add delete button feature to task list',
    description: 'An ex on the side of the task should allow for the task to be removed',
    priority: 'High',
    status: 'In Progress',
  },];  // end list

const sprintName = 'Q5';

ReactDOM.render(
  <React.Fragment>
  <h1> Sprint: { sprintName } </h1>
  <h2> This is the task count {list.length} + {list[0].priority} </h2>
  <TaskList tasks={ list }>
  </TaskList>
  </React.Fragment>,
  document.getElementById('app')
);
