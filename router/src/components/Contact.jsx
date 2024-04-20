import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
      <Link to="/contact/channel">Channel</Link>
      <Link to="/contact/company">Company</Link>
      <Link to="/contact/other">Other</Link>
    </div>
  )
}

export default Contact
