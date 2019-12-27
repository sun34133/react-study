import React from 'react';

import classes from './Cockpit.css';

const cockpit = ( props ) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.showStudents) {
        btnClass = classes.Red;
    }

    if (props.students.length <= 2) {
      assignedClasses.push(classes.bold);
    }
    if (props.students.length < 5) {
      assignedClasses.push(classes.red);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}>This is test for the child paragraph.</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Students</button>
        </div>
    );
};

export default cockpit;