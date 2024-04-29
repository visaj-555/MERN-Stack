import React from 'react'
import {Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <nav>
          <Link to="/">Home</Link>
          <br /> 
          <Link to="/about">About</Link>
        </nav>
    </div>
  )
}
