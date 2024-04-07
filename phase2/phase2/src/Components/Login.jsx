import React, { useState } from "react";

function Login()
{
    const [user, setUser] = useState[""];
    const [password, setPassword] = useState[""];

    function HandleLogin(e){
        e.preventDefault();
    }
    return(
    <div>
    <h1>Login </h1>
    <form onSubmit={HandleLogin}>
    <input type = "text" placeholder = "Enter your ID" onChange  = {UserHandler} />
    <br />  <br /> 
    <input type = "password" placeholder = "Enter your Password" />
    <br />  <br /> 
    <button type = "submit" > Login </button>

    </form>
    </div>
    )
} 

export default Login;