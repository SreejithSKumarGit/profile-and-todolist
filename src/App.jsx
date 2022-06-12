
import React from 'react';
import './App.css';
import Profile from './Profile';
import Todos from './Todos';
function App() {
  
  return (
    <div id='Container'>
    <div id='profileContainer'>
      {<Profile/>}
    </div>
    <div id='todoListContainer'>
        
        {<Todos/>}
    </div>
    </div>
  );
}

export default App;
