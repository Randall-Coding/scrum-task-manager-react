import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { remove } from './actions';
import { Task } from './Task.js'

function mapDispathToProps(dispatch, ownProps) {
  return {remove: () => dispatch(remove(ownProps.taskId))}
}

export const TaskContainer = connect(null, mapDispathToProps())(Task);
