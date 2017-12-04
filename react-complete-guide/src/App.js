import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

state = {
  persons: [
        {name: "Sanjay", age:27},
        {name: "Saurabh", age:28},
        {name: "Arijit", age:26}
      ],
  otherState: "Some Value"
}
  
  switchNameHandler = (newName) => {
    // console.log("Was Clicked !!!!");
    this.setState({
      persons: [
        {name: newName, age:27},
        {name: "Sabyasachi Banerjee", age:27},
        {name: "Arijit Dutta", age:26}
      ]
    })
  }  

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age:27},
        {name: "Sabyasachi Banerjee", age:27},
        {name: "Arijit Dutta", age:26}
      ]
    })
  }


  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is Really Working!!!!</p>
        <button 
          style = {style}
          onClick = {() => this.switchNameHandler("SS!!!!!")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          changed={this.nameChangeHandler}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Pappu")}>My Hobbies: Football</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!!'));
  }
}

export default App;
