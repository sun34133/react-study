import React from "react";

const userInput = props => {
  return (
    <div className="UserInput">
      <input type="text" onChange={props.updated} />
    </div>
  );
};

export default userInput;
