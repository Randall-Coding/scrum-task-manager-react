import React from 'react';
import ReactDOM from 'react-dom';

function Progress({percentComplete}) {
  return <progress value={percentComplete} max='100'/>
}

export default Progress;
