import React, { Component } from "react";
import PropTypes from "prop-types";

import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/WithClass";
import classes from "./Student.css";

class Student extends Component {

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Student.js] rendering....");
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          //ref={(inputEl) => { this.inputElement = inputEl}}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.updated}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Student.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  updated: PropTypes.func
};

export default withClass(Student, classes.Student);
