import React, { useState } from 'react'

function App() {

const [inputValue, setInputValue] = useState("");
// const [data, setData] = useState("Welcome");
const handleChange = (event) => 
{
  setInputValue(event.target.value);
};

const handleClick = (event) => 
{
  setInputValue(event.target.value);
};


  return (
      <div>
           <h1> {inputValue} </h1>
           <input type="text" onChange = {handleChange} />
      </div>
  )
}

export default App
