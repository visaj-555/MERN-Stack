import React, { useState } from "react";

function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();
        // Your login logic here
    }

    function userHandler(e) {
        setUser(e.target.value);
    }

    function passwordHandler(e) {
        setPassword(e.target.value);
    }

    return (
        <div>
            <h1>Login </h1>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Enter your ID" onChange={userHandler} />
                <br />  <br /> 
                <input type="password" placeholder="Enter your Password" onChange={passwordHandler} />
                <br />  <br /> 
                <button type="submit"> Login </button>
            </form>
        </div>
    );
}

export default Login;
