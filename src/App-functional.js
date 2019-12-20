import React, { useState } from "react";
import "./App.css";
import Student from "./Student/Student";

// function App() {
//   return (
//     <div className="App">
//       <h1>HI, I am starting react study.</h1>
//     </div>
//   );
// }

// class App extends Component {

//   state = {
//     students: [
//       { name: "John", age: 28},
//       { name: "Stephie", age: 25},
//       { name: "Mark", age: 29}
//     ],
//     otherState: 'not changing on click change name'
//   }

//   changeNameHandler = () => {
//     // console.log(' m clicked!');
//     // Dont do this > this.state.students[0].name = 'Changed';
//     this.setState({
//       students: [
//         { name: "John new", age: 28},
//         { name: "Stephie", age: 25},
//         { name: "Mark Walter", age: 29}
//       ]
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hi, I'm starting udemy react course!!!</h1>
//         <p>This is test for the child paragraph.</p>
//         <button onClick={this.changeNameHandler}>Change Name</button>
//         <Student name={this.state.students[0].name} age={this.state.students[0].age} />
//         <Student name={this.state.students[1].name} age={this.state.students[1].age}>My hobbies: Swimming, Dancing, Surfing etc </Student>
//         <Student name={this.state.students[2].name} age={this.state.students[2].age} />
//       </div>
//     );

//     // return React.createElement('div', null, 'h1', 'Hi, I am starting udemy react course!!!');
//     // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Hi, I am starting udemy react course!!!'))
//   }
// }

const App = props => {
  const [studentState, setStudentState] = useState({
    students: [
      { name: "John", age: 28 },
      { name: "Stephie", age: 25 },
      { name: "Mark", age: 29 }
    ]
  });

  const [otherState, setOtherState] = useState('other not changed state!');

  console.log(studentState, otherState);

  const changeNameHandler = () => {
    setStudentState({
      students: [
        { name: "John new", age: 28 },
        { name: "Stephie", age: 25 },
        { name: "Mark Walter", age: 29 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm starting udemy react course!!!</h1>
      <p>This is test for the child paragraph.</p>
      <button onClick={changeNameHandler}>Change Name</button>
      <Student
        name={studentState.students[0].name}
        age={studentState.students[0].age}
      />
      <Student
        name={studentState.students[1].name}
        age={studentState.students[1].age}
      >
        My hobbies: Swimming, Dancing, Surfing etc{" "}
      </Student>
      <Student
        name={studentState.students[2].name}
        age={studentState.students[2].age}
      />
    </div>
  );
};

export default App;
