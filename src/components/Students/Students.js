import React from "react";

import Student from "./Student/Student";

const students = (props) => props.students.map((student, index) => {
    return <Student
        name={student.name}
        age={student.age}
        key={student.id}
        click={() => props.clicked(index)}
        updated={ (event) => props.updated(event, student.id)}
      />
  });

export default students;
