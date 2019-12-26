import React from "react";

import classes from "./Student.css";

const student = props => {
  const rnd = Math.random();

  if (rnd > 0.7) {
    throw new Error("Something went wrong!!");
  }
  return (
    <div className={classes.Student}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.updated} value={props.name} />
    </div>
  );
};

export default student;
