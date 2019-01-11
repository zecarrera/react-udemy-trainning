import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "John", age: 25},
      {name: "zack", age: 21}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState(
      {
        persons: [
            {
              name: newName,
              age: 28
            }, {
              name: "JohnNew",
              age: 25
            }, {
              name: "zackNew",
              age: 21
            }
    ]})
  }

  nameChangedHandler = (event) => {
     this.setState({
       persons: [{
         name: "newName",
         age: 28
       }, {
         name: event.target.value,
         age: 25
       }, {
         name: "zackNew",
         age: 21
       }]
     })
  }

  render() {
    const buttonStyle = {
        backgroundColour: "white",
        font: "inherit",
        border: "1px solid blue",
        padding: "8px"
    }

    return (
      <div className="App">
       <p>Hi, I'm a react app</p>
       <button style={buttonStyle} 
          onClick={()=> this.switchNameHandler("arrowFunctionCall")}>Switch Name</button>
       <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "newNameMax")}
          changed={this.nameChangedHandler}
       />
       <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          />
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
    );
  }
}

export default App;
