import React from 'react';
import {Routes, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Error from './Error';

function App() {
  return (
    <div className="App">
      <Nav />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />

          <Route path="/" exact = {true} element={<Home />} />
        </Routes>
    </div>
  );
}





export default App;
