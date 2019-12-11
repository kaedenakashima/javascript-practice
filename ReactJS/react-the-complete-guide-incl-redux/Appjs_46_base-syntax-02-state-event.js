import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Katie", age: 27 },
      { name: "Jenny", age: 29 },
      { name: "Jimmy", age: 24 }
    ],
    otherState: "some other value"
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    //DON'T DO THIS: this.state.persons[0].name = 'Green';
    this.setState( {
      persons: [
        { name: newName, age: 27 },
        { name: "Jenny", age: 29 },
        { name: "Jimmy", age: 20 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={ () => this.switchNameHandler('Michelle')}>Switch Name</button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Kaede!')}
        >
          My Hobbies: Painting
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
