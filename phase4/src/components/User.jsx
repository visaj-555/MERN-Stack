import React from 'react'

export default function User(props) {
    const data = "Visaj";
  return (
    <div>
      <h2> User component  </h2>
      <button onClick={() => props.alert(data)}> Click Me  </button>
    </div>
  )
}
