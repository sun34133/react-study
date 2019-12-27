import React, { Component } from "react";

import Aux from "../../../hoc/Aux";
import classes from "./Student.css";

class Student extends Component {
  render() {
    console.log("[Student.js] rendering....");
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.updated}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

export default Student;
