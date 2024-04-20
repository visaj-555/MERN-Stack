import React from 'react'
import Home from './components/Home'
import About from './components/About'
import NavBar from './components/NavBar';
import Page404 from './components/Page404';
import User from './components/User';
import Filter from './components/Filter';
import Contact from './components/Contact';
import Channel from './components/Channel';
import Company from './components/Company';
import Other from './components/Other';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/channel" element={<Channel />} />
          <Route path="/contact/company" element={<Company />} />
          <Route path="/contact/other" element={<Other />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
