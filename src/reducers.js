import { combineReducers } from 'redux'
import { REMOVE, ADD, INIT } from './actionTypes.js'

function tasks(state = [], action) {
  switch (action.type) {
    case REMOVE:
      return state.filter(function(item) { return item.taskId != action.id });
    case ADD:
      (action.task).taskId = nextTaskId();
      (action.task).key = action.task.taskId;
      return [...state, action.task];
    case INIT:
      return action.list;
    default:
      return state;
  }
}

// Returns incremented task id from global variable
function nextTaskId() {
  return ++global.currentTaskId
}

// function newTask(state = {name: null,description: null,priority: null,status: 'Open',taskId:null,key:null}, action) {
//   switch (action.type) {
//     case NEWTASK_NAME:
//       state.name = action.name;
//       return state
//     case NETTASK_DESCRIPTION:
//     default:
//     return state;
//   }
// }

export default combineReducers({ tasks});
