import React from 'react';

function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [status, setStatus] =  React.useState(true);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      {/* {status ? <h1> {inputValue}</h1> : null} */}
      {status ? <h1> VISAJ </h1> : null}
      <input type="text" onChange={handleChange} />
      {/* <button onClick={() => setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>Show</button> */}
      <button onClick={() => setStatus(!status)}>Toggle </button>
        </div>
  );
}

export default App;
