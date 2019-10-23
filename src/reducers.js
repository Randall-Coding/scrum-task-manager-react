import { combineReducers } from 'redux'
import { REMOVE, ADD, INIT } from './actionTypes.js'

function tasks(state = [], action) {
  switch (action.type) {
    case REMOVE:
      return state.filter(function(item) { return item.taskId != action.id });
    case ADD:
      return [...state, action.task];
    case INIT:
      return action.list;
    default:
      return state;
  }
}

export default combineReducers({ tasks });
