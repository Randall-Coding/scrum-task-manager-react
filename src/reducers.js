import { combineReducers } from 'redux'
import { DELETE } from './actions'
function deleteTask(state = [], action) {
  if (action.type == DELETE) {
    return null;
  }
  else {
    return state;
  }
}

export default combineReducers(deleteTask);
