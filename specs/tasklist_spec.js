import TaskList from '../src/TaskList';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { JSDOM } from 'jsdom';
import fourTasks from './factories/tasks_factory'

it('outputs a row for each task', () => {
  const list = fourTasks()  // Factory
  var rElTaskList = TaskList({ tasks: list });
  var rowCount = countTableRows(rElTaskList);
  expect(rowCount).toBeGreaterThan(0);
  expect(rowCount).toBe(list.length);
});

function countTableRows(el) {
  var xml = ReactDOMServer.renderToString(el);
  var dom = new JSDOM(xml);
  return dom.window.document.getElementsByTagName('tr').length;
}
