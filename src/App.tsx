import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = () => {
  const [people, setPeople] = useState([
    {name: 'Triss', age:30, hobby:'Video Game' },
    {name: 'Leo', age:20, hobby:'Sport Box' }
  ])

  const charangeName = () => {
    setPeople([
      {name: 'Max', age:60, hobby:'Video Game' },
      {name: 'Aza', age:50, hobby:'Sport Box' }
    ])
  }
   
  return (
    <div className="App">
      <Person name={people[0].name} age={people[0].age}><b>Hobby: </b><span>{people[0].hobby}</span> </Person>
      <Person name={people[1].name} age={people[1].age}><b>Hobby: </b><span>{people[1].hobby}</span> </Person>

      <div>
        <button onClick={charangeName}>Charge name</button>
      </div>
    </div>
  );
};

export default App;