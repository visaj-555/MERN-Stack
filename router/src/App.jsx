// App.jsx
import React from 'react'
import Home from './components/Home'
import About from './components/About'
import NavBar from './components/NavBar';
import Page404 from './components/Page404';
import User from './components/User';
import Filter from './components/Filter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
