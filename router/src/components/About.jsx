// About.jsx
import React from 'react'
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1> About us page </h1>
      <p> This is my awesome About us page </p>
      <Link to="/">Go to home page</Link>
    </div>
  )
}

export default About;
