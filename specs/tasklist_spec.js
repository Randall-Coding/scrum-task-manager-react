import TaskList from '../src/TaskList';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { JSDOM } from 'jsdom';

it('outputs a row for each task', () => {
  const list = [
    {
      name: 'Header bar needs to fill screen',
      description: 'Header bar is showing some of the background on the left side of the screen.  Needs to fill space',
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
    },];
  var rElTaskList = TaskList({ tasks: list });
  var rowCount = countTableRows(rElTaskList);
  expect(rowCount).toBe(list.length);
});

function countTableRows(el) {
  var xml = ReactDOMServer.renderToString(el);
  var dom = new JSDOM(xml);
  return dom.window.document.getElementsByTagName('tr').length;
}
