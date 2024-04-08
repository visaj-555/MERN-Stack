import React from 'react';
import User from './components/User.js';
import Life from './components/Life.js';
function App() {
function getData(){
  alert("Hello world ");
}
  return (
    <div>
           <User data = {getData}  />   
           <Life />

    </div>
    

        )
}

export default App;
