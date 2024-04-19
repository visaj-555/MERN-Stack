// Home.jsx
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
        <h1> Home page </h1>
        <p> This is my awesome home page </p>
        <Link to="/about">Go to about page</Link>
        <br />
        <button onClick={() => navigate('/about')}>About page</button>
        <button onClick={() => navigate('/filter')}>Filter page</button>
    </div>
  )
}

export default Home;
