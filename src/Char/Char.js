import React from "react";

const char = (props) => {
  const styles = {
    display: "inline-block",
    border: "2px solid #000",
    padding: "15px",
    margin: "15px",
    textAlign: "center"
  };

  return (
    <div style={styles} onClick={props.clicked}>
        {props.character}
    </div>
  );
};

export default char;
