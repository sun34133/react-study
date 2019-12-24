import React from "react";

const validation = props => {
  let validationText = "Text is too short";
  if (props.inputLength > 5) {
    validationText = "Text is long enough";
  }
  return (
    <div>
      <p>{validationText}!</p>
    </div>
  );
};

export default validation;
