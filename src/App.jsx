
import React from 'react';
import './App.css';
import Profile from './Profile';
import Todolist from './Todolist';
function App() {
  
  return (
    <div id='Container'>
    <div id='profileContainer'>
      {<Profile/>}
    </div>
    <div id='todoListContainer'>
        {<Todolist/>}
    </div>
    </div>
  );
}

export default App;
