import React, { Component } from "react";
import classes from "./App.css";

import Students from "../components/Students/Students";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    students: [
      { id: "aa1", name: "John", age: 28 },
      { id: "bb1", name: "Stephie", age: 25 },
      { id: "cc1", name: "Mark", age: 29 }
    ],
    showStudents: false,
    userInput: ""
  };

  updateNameHandler = (event, id) => {
    const studentIndex = this.state.students.findIndex(s => {
      return s.id === id;
    });

    const student = {
      ...this.state.students[studentIndex]
    };

    // const student = Object.assign({}, this.state.students[studentIndex]);
    student.name = event.target.value;

    const students = [...this.state.students];
    students[studentIndex] = student;

    this.setState({ students: students });
  };

  toggleStudentsHandler = () => {
    const showStudentsDiv = this.state.showStudents;
    this.setState({ showStudents: !showStudentsDiv });
  };

  deleteStudentHandler = studentIndex => {
    const students = [...this.state.students];
    students.splice(studentIndex, 1);
    this.setState({ students: students });
  };

  render() {
    let students = null;
    if (this.state.showStudents) {
      students =
          <Students
            students={this.state.students}
            clicked={this.deleteStudentHandler}
            updated={this.updateNameHandler}
          />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showStudents={this.state.showStudents}
          students={this.state.students}
          clicked={this.toggleStudentsHandler}
        />
        {students}
      </div>
    );

    // return React.createElement('div', null, 'h1', 'Hi, I am starting udemy react course!!!');
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Hi, I am starting udemy react course!!!'))
  }
}

export default App;
