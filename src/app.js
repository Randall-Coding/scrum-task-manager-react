import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList';
import Progress from './Progress';
import TaskMenu from './TaskMenu';
import axios from 'axios';
import store from './store';
import { removeTask, addTask, init } from './actions';
import { Provider } from 'react-redux';

const sprintName = 'Q5';

axios.get('/tasks.json').then(response => {
  const list = response.data;
  const percentComplete = calculateProgress(list);
  global.currentTaskId = list[list.length - 1].taskId

  store.dispatch(init(list))
  ReactDOM.render(
    <Provider store={ store }>
      <h1> Sprint: { sprintName } </h1>
      <Progress percentComplete={ percentComplete }/>
      <TaskMenu addTask = { addTask }> </TaskMenu>
      <TaskList tasks={ list }/>
    </Provider>,
    document.getElementById('app')
  );

  store.dispatch(removeTask(1))

  const newTask = {
      name: 'New task',
      description: 'New task',
      priority: 'Low',
      status: 'Open',
      taskId: 5,
    }

  store.dispatch(addTask(newTask));
});

function calculateProgress(tasks) {
  const total = tasks.length
  var closed = 0;
  tasks.forEach(task => {
    if (task.status.toLowerCase() == 'closed') {
      closed++;
    }
  });
  return (closed / total) * 100;
}
