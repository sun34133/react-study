import React, { Component } from "react";
import "./App.css";
import Student from "./Student/Student";
import UserOutput from "./User/UserOutput/UserOutput";

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
      { name: "John", age: 28 },
      { name: "Stephie", age: 25 },
      { name: "Mark", age: 29 }
    ],
    paragraphs: [
      {
        username: "Sunil Kumar", text1: "Sample text one", text2: "sample text two"
      },
      {
        username: "Rahul Dev", text1: "example text one", text2: "example text two"
      }
    ]
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

  updateNameHandler = event => {
    this.setState({
      students: [
        { name: "John", age: 28 },
        { name: event.target.value, age: 25 },
        { name: "Mark new", age: 29 }
      ]
    });
  };

  changeUsernameHandler = newUsername => {
    this.setState({
      paragraphs: [
        {
          username: "Sunil Kumar", text1: "Sample text one", text2: "sample text two"
        },
        {
          username: newUsername, text1: "example text one", text2: "example text two"
        }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm starting udemy react course!!!</h1>
        <p>This is test for the child paragraph.</p>
        <button onClick={this.changeNameHandler.bind(this, "Updated one")}>
          Change Name
        </button>
        {/* <Student
          name={this.state.students[0].name}
          age={this.state.students[0].age}
        />
        <Student
          name={this.state.students[1].name}
          age={this.state.students[1].age}
          click={this.changeNameHandler.bind(this, "aon one")}
          updated={this.updateNameHandler}
        >
          My hobbies: Swimming, Dancing, Surfing etc{" "}
        </Student>
        <Student
          name={this.state.students[2].name}
          age={this.state.students[2].age}
        /> */}
        <UserOutput
          username={this.state.paragraphs[0].username}
          text1={this.state.paragraphs[0].text1}
          text2={this.state.paragraphs[0].text2}
          click={this.changeUsernameHandler.bind(this, "Ajay Jadeja")}
          updated={this.updateUserNameHandler}
        />
        <UserOutput
          username={this.state.paragraphs[1].username}
          text1={this.state.paragraphs[1].text1}
          text2={this.state.paragraphs[1].text2}
        />
      </div>
    );

    // return React.createElement('div', null, 'h1', 'Hi, I am starting udemy react course!!!');
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Hi, I am starting udemy react course!!!'))
  }
}

export default App;
