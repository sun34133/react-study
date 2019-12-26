import React, { Component } from "react";
import classes from "./App.css";

import Student from "./Student/Student";

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

import Validation from "./Validation/Validation";
import Char from "./Char/Char";

// function App() {
//   return (
//     <div className="App">
//       <h1>HI, I am starting react study.</h1>
//     </div>
//   );
// }

class App extends Component {
  state = {
    students: [
      { id: "aa1", name: "John", age: 28 },
      { id: "bb1", name: "Stephie", age: 25 },
      { id: "cc1", name: "Mark", age: 29 }
    ],
    paragraphs: [
      {
        username: "Sunil Kumar",
        text1: "Sample text one",
        text2: "sample text two"
      },
      {
        username: "Rahul Dev",
        text1: "example text one",
        text2: "example text two"
      }
    ],
    username: "SuperMax",
    showStudents: false,
    userInput: ""
  };

  changeNameHandler = newName => {
    // console.log(' m clicked!');
    // Dont do this > this.state.students[0].name = 'Changed';

    this.setState({
      students: [
        { name: newName, age: 28 },
        { name: "Stephie", age: 25 },
        { name: "Mark new", age: 29 }
      ]
    });
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

    // this.setState({
    //   students: [
    //     { name: "John", age: 28 },
    //     { name: event.target.value, age: 25 },
    //     { name: "Mark new", age: 29 }
    //   ]
    // });
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

  changeUsernameHandler = newUsername => {
    this.setState({
      paragraphs: [
        {
          username: "Sunil Kumar",
          text1: "Sample text one",
          text2: "sample text two"
        },
        {
          username: newUsername,
          text1: "example text one",
          text2: "example text two"
        }
      ]
    });
  };

  render() {
    let students = null;
    let btnClass = [classes.button]

    if (this.state.showStudents) {
      students = (
        <div>
          {this.state.students.map((student, index) => {
            return (
              <Student
                name={student.name}
                age={student.age}
                key={student.id}
                click={() => this.deleteStudentHandler(index)}
                updated={event => this.updateNameHandler(event, student.id)}
              />
            );
          })}
        </div>
      );

      btnClass.push(classes.Red);
    }

    const assignedClasses = [];
    if (this.state.students.length <= 2) {
      assignedClasses.push(classes.bold);
    }
    if (this.state.students.length < 5) {
      assignedClasses.push(classes.red);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm starting udemy react course!!!</h1>
        <p className={assignedClasses.join(" ")}>
          This is test for the child paragraph.
        </p>
        {/* <button onClick={this.changeNameHandler.bind(this, "Updated one")}>
          Change Name
        </button> */}
        <button className={btnClass.join(' ')} onClick={this.toggleStudentsHandler}>
          Toggle Students
        </button>

        {students}
      </div>
    );

    // return React.createElement('div', null, 'h1', 'Hi, I am starting udemy react course!!!');
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Hi, I am starting udemy react course!!!'))
  }

  usernameChangedHandler = event => {
    this.setState({ username: event.target.value });
  };

  renderSection3() {
    return (
      <div className="App">
        <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username}
        />
        <UserOutput userName="Sunil" />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
      </div>
    );
  }

  inputChangedHandler = event => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = index => {
    const txt = this.state.userInput.split("");
    txt.splice(index, 1);
    const updatedTxt = txt.join("");
    this.setState({ userInput: updatedTxt });
  };

  renderSection4() {
    const charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <input
          type="text"
          className="charInput"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />

        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />

        {charList}
      </div>
    );
  }
}

export default App;
