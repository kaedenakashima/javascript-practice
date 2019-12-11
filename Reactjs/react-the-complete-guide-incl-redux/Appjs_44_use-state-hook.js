import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState ({
    persons: [
      { name: 'Katie', age: 27 },
      { name: 'Jenny', age: 29 },
      { name: 'Jimmy', age: 24 }
    ]
  });
 
  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log('Was clicked!');
    //DON'T DO THIS: this.state.persons[0].name = 'Green';
    setPersonsState({
      persons: [
        { name: 'Green', age: 27 },
        { name: 'Jenny', age: 29 },
        { name: 'Jimmy', age: 20}
      ]
    });
  };
  
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age} />
      <Person 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age}>My Hobbies: Painting</Person>
      <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age} />
    </div>
  );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
};

export default app;



