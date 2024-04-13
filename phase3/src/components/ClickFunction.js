import React from 'react'

function changeEvent() {

    console.log("Event Handling");
}

function ClickFunction() {
  return (
    <div>
      <button onClick={changeEvent} > Click me </button>
    </div>
  )
}

export default ClickFunction;
