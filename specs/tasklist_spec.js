require('./setup_jsdom.js')
import TaskList from '../src/TaskList';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { JSDOM } from 'jsdom';
import fourTasks from './factories/tasks_factory'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('A task list with four tasks', () => {

  it('outputs a row for each task', () => {
    const taskList = fourTasks()  // Factory
    var rElTaskList = TaskList({ tasks: taskList });
    var rowCount = countTableRows(rElTaskList);
    expect(rowCount).toBeGreaterThan(0);
    expect(rowCount).toBe(taskList.length + 1);
  });

  it('deletes a row when x button on task is clicked', () => {
    const tasks = fourTasks()
    const tasklist = mount(<TaskList tasks={ tasks } />)

    const oldHTML = tasklist.html();

    // Click
    const oldTask = tasklist.find('img.x-icon[data-task-id="1"]')
    console.log(oldTask.html())
    oldTask.simulate('click')
    tasklist.mount()

    // Expect tr count to be 3
    const newHTML = tasklist.html();
    console.log("newHTML " + newHTML);
    expect(oldHTML).not.toEqual(newHTML)

    //  Expect we cannot find tr with id= 1
  });
});






function countTableRows(el) {
  var xml = ReactDOMServer.renderToString(el);
  var dom = new JSDOM(xml);
  return dom.window.document.getElementsByTagName('tr').length;
}
