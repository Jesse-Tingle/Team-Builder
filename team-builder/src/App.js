import React, { useState } from 'react';

import Form from './Form';

import './App.css';

function App() {

  const [teamMember, setTeamMember] = useState([
    {
      name: 'Jesse',
      email: 'jtingle0@gmail.com',
      role: 'Full Stack Engineer'
    }
  ])

  return (
    <div className="App">
      <h1>My Team</h1>

      <Form />

      {teamMember.map((member, index) => (
        <div className="member" key={index}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>  
      ))}
    </div>
  );
}

export default App;
