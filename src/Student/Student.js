import React from "react";

import './Student.css';

const student = props => {
  return (
    <div className="Student">
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.updated} value={props.name} />
    </div>
  );
};

export default student;
