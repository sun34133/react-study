import React from "react";

const userOutput = props => {
  return (
    <div className="userOutput">
      <h3 onClick={props.click}>{props.username}</h3>
      <p>{props.text1}</p>
      <p>{props.text2}</p>
    </div>
  );
};

export default userOutput;
