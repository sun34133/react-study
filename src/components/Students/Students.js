import React, { Component } from "react";

import Student from "./Student/Student";

class Students extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Students.js] getDerivedStateFromProps", props);
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log("[Persons.js] componentWillReceiveProps", props);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Students.js] shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Students.js] getSnapshotBeforeUpdate");
    return {message: 'Snapshot!!'};
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapShot)
  }

  render() {
    console.log("[Students.js] rendering....");
    return this.props.students.map((student, index) => {
      return (
        <Student
          name={student.name}
          age={student.age}
          key={student.id}
          click={() => this.props.clicked(index)}
          updated={event => this.props.updated(event, student.id)}
        />
      );
    });
  }
}
export default Students;
