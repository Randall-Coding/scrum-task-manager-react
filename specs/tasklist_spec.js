/**
 * @jest-environment node
 */
require('./setup_jsdom.js');
import { TaskList } from '../src/TaskList';
import ConnectedTaskList from '../src/TaskList'
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { JSDOM } from 'jsdom';
import fourTasks from './factories/tasks_factory'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import store from '../src/store';
import { Provider } from 'react-redux'


React.useLayoutEffect = React.useEffect;  // Avoids the useLayoutEffect warnings from Jest


describe('A task list with four tasks', () => {

  it('outputs a row for each task', () => {
    const tasks = fourTasks()  // Factory
    var elTaskList = <Provider store={ store }> <TaskList tasks= { tasks }/> </Provider> ;
    var rowCount = countTableRows(elTaskList);
    expect(rowCount).toBeGreaterThan(0);
    expect(rowCount).toBe(tasks.length + 1);
  });

  it ('deletes a row when x button on task is clicked', () => {

    const tasks = fourTasks()
    const tasklist = mount(<Provider store={ store }> <TaskList tasks={ tasks } /> </Provider>, { attachTo: document.getElementById('app') });
    global.jQuery = global.jQuery(global.window);

    // Grab html
    const oldHTML = tasklist.html();
    // console.log("oldHTML: " + oldHTML);
    const oldRowCount = countTableRows(oldHTML);

    // Click
    const oldTask = tasklist.find('img.x-icon[data-task-id="1"]');
    // console.log(oldTask.html());
    oldTask.simulate('click');
    tasklist.mount();

    // Expect html to have removed a row
    const newHTML = tasklist.html();
    // console.log("newHTML: " + newHTML);
    expect(oldHTML).not.toEqual(newHTML);
    expect(countTableRows(newHTML)).toEqual(oldRowCount - 1);

    // Expect to not find tr with id= 1
    expect(newHTML).not.toContain('data-task-id="1"');
  });
});

// Params: el can be ReactElement or HTML string
function countTableRows(el) {
  if (typeof (el) == 'object') {
    var xml = ReactDOMServer.renderToString(el);
  }
  else {
    var xml = el
  }
  var dom = new JSDOM(xml);
  return dom.window.document.getElementsByTagName('tr').length;
}
