/**
 * @jest-environment node
 */

require('./setup_jsdom.js');
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { JSDOM } from 'jsdom';
import fourTasks from './factories/tasks_factory'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import store from '../src/store';
import {addTask, removeTask, init} from '../src/actions';
import { Provider } from 'react-redux'
React.useLayoutEffect = React.useEffect;  // To avoid the useLayoutEffect warnings from Jest

describe("addTask", () => {
  beforeEach(() => {
    global.currentTaskId = 1
  });

  it("initializes successfully",() => {
    // Setup
    const originalCount = store.getState().tasks.length;
    var tasks = fourTasks()

    // Run the reducer
    store.dispatch(init(tasks))

    // Check the new state
    const newCount = store.getState().tasks.length;
    const latestTask = store.getState().tasks.slice(-1)[0];
    expect(newCount).toEqual(originalCount + tasks.length);
    expect(latestTask.taskId).toEqual(tasks.slice(-1)[0].taskId);
  })

  it("adds task successfully",() => {
    // Setup
    const originalCount = store.getState().tasks.length;
    var task = fourTasks()[0]

    // Run the reducer
    store.dispatch(addTask(task))

    // Check the new state
    const newCount = store.getState().tasks.length;
    const latestTask = store.getState().tasks.slice(-1)[0];
    expect(newCount).toEqual(originalCount + 1);
    expect(latestTask.taskId).toEqual(task.taskId)
  })

  it("adds task successfully",() => {
    // Setup
    var tasks = fourTasks()
    var task = tasks[0]
    store.dispatch(init(tasks))
    const originalCount = store.getState().tasks.length;

    // Run the reducer
    store.dispatch(removeTask(task.taskId))

    // Check the new state
    const newCount = store.getState().tasks.length;
    const latestTasks = store.getState().tasks;
    expect(newCount).toEqual(originalCount - 1);
    expect(latestTasks.map((t) => {return t.taskId})).toContain((parseInt(task.taskId) + 1).toString());
    expect(latestTasks.map((t) => {return t.taskId})).not.toContain(task.taskId);
  })
});
