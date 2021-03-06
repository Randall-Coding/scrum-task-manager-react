import { REMOVE, ADD, INIT } from './actionTypes.js';

export const removeTask = (id) => ({type: REMOVE,id: id});
export const addTask = (task) => ({type: ADD, task: task});
export const init = (list) => ({type: INIT, list: list});
