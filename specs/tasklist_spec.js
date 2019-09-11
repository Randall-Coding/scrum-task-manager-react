import TaskList from '../src/TaskList';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { JSDOM } from 'jsdom';

it('outputs a row for each task', () => {
  const list = ['nigga', 'nighah', 'myniggah', 'niighaa'];
  var rElTaskList = TaskList({ list });
  var rowCount = countTableRows(rElTaskList);
  expect(rowCount).toBe(4);
});

function countTableRows(el) {
  var xml = ReactDOMServer.renderToString(el);
  var dom = new JSDOM(xml);
  return dom.window.document.getElementsByTagName('tr').length;
}
