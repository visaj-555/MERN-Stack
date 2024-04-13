import React from 'react';
import User from './components/User.js';
import Life from './components/Life.js';
import CHeader from './components/CHeader.js';
import Channel from './components/Channel.js';
import ClickFunction from './components/ClickFunction.js';
import CFunctionClick from './components/CFunctionClick.js';
import StyleSheet from './components/StyleSheet.js';
import Inline from './components/Inline.js';
import './components/appstyle.css';
import Style from './components/app.module.css';
function App() {
function getData(){
  alert("Hello world ");
}
  return (
    <div>
           {/* <User  data = {getData}>
          
           <p> Testing my props </p>
           </User> 
          
           <Life />
           <CHeader />
            <Channel />
            <ClickFunction />
            <CFunctionClick roll = "22" /> */}
            <h1 className= {Style.success}> Success</h1>
            <h1 className= 'error'> Error</h1>


            <StyleSheet isvalue = {false}> </StyleSheet>
    </div>
    

        )
}

export default App;
