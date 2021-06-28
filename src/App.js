import React from 'react';
import './App.css';
import ListTask from './Components/ListTask';
import Add from './Components/Add';


function App() {
 
  return (
    <div  class="header">
        <h3>To Do List</h3>
      <Add/>
     <ListTask/>
    </div>
  );
}

export default App;