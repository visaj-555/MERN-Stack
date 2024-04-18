import React, { useRef } from 'react';

function RefEx() {
  let inputRef = useRef(null);

  function eventHandler() {
    console.warn("function call");
    inputRef.current.value = "Hello World";
  }

  return (
    <div>
      <h3>useRef example</h3>
      <input type="text" ref={inputRef} />
      <button onClick={eventHandler}>Handle event</button>
      <h5> useRef Ends !!</h5>
    </div>
  );
}

export default RefEx;
