import React, { useState } from 'react';
import Hello from "./components/Hello"; 
import Visaj from "./components/Visaj";
import Fav from "./components/Fav";
import Example from './components/Example';
// import Props2 from './components/Props2';
function App() {
  const [data, setData] = useState("Welcome");
  function updateData() {
    setData("Hello ji");
  }
  return  <div className = 'App'> 
  <h1 onClick={updateData}> {data} </h1>


  <Hello/>
  <Visaj/>
  <DailyRoutine/>
  <Fav/>
  <Example name = {"Visaj"} email = {"visajpanchal777@gmail.com"} other = {{address : 'Mumbai' , number : '8200988308'}}/>
  <Example name = {"Khushi"} email = {"khushibhatt05@gmail.com"} other = {{address : 'Delhi' , number : '4894656308'}}/>
  {/* <Props2 name = {"Riya"}/> */}
  </div>

}

function DailyRoutine(){
  return <div> 
    <h4>Daily Routine</h4>
    <p> Exercise </p>
    <p> Prayer </p>
    <p> MERN Stack </p>
    <p> Apply for Job </p>
    <p> Revision </p>
  </div>
}

export default App;
