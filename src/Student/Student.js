import React from "react";
import styled from "styled-components";

// import "./Student.css";
const StyledDiv = styled.div`
  width: 75%;
  margin: 20px auto;
  border: 1px solid #ededee;
  padding: 10px;
  box-shadow: 0 2px #cccccc;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const student = props => {
  return (
    // <div className="Student">
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.updated} value={props.name} />
    </StyledDiv>
  );
};

export default student;
