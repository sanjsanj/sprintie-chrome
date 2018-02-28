import React from 'react';
import ReactDOM from 'react-dom';
import Collapsible from 'react-collapsible';

const Option = () => (
  <div className="option__wrapper">
    <Collapsible trigger="Start here">
      <div className="option option__days">
        <h2>Days in sprint:</h2>
        <input className="option__days--number" type="number" min="0" />
      </div>
      <div className="option option__days-dev">
        <h2>Points per developer per day:</h2>
        <input className="option__days--number-dev" type="number" min="0" />
      </div>
    </Collapsible>
  </div>
);

export default Option;
