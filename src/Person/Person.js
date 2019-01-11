import React from 'react';

import './Person.css'


const person = props => {
    return (
        <div className="Person">
            <p>Hi, I'm a person {props.name} ageed {props.age}</p>
            <button onClick={props.click}>switch name</button>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    )
};

export default person;