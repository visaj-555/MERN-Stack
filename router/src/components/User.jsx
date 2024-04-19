// User.jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './NavBar.css'; 

function User() {
  const params = useParams();
  const { name } = params;
  
  return (
    <div>
      <h1> This is {name}'s page </h1>
      <div className='navbar'>
        <Link to="/user/Anil" className="nav-link">Anil</Link> 
        <Link to="/user/Visaj" className="nav-link">Visaj</Link>
      </div>
    </div>
  )
}

export default User;
