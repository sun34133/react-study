import React, { Component } from "react";

import classes from "./Student.css";

class Student extends Component {
  render() {
    console.log("[Student.js] rendering....");
    return (
      <div className={classes.Student}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.updated} value={this.props.name} />
      </div>
    );
  }
}

export default Student;
