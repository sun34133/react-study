import React, { PureComponent } from "react";

import Student from "./Student/Student";

class Students extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Students.js] getDerivedStateFromProps", props);
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log("[Persons.js] componentWillReceiveProps", props);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Students.js] shouldComponentUpdate");
  //   if (
  //     nextProps.students !== this.props.students ||
  //     nextProps.clicked !== this.props.clicked ||
  //     nextProps.updated !== this.props.updated
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Students.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot!!" };
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapShot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
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
          isAuth={this.props.isAuthenticated}
        />
      );
    });
  }
}
export default Students;
