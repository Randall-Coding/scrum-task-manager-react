import React from 'react';
import ReactDOM from 'react-dom';

function Progress({percentComplete}) {
  return (
    <React.Fragment>
      <h3 id="progress-title"> { percentComplete }% complete </h3>
      <progress value={percentComplete} max='100'/>)
    </React.Fragment>
  );
}

export default Progress;
