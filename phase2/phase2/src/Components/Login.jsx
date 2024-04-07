import React, { useState } from "react";

function Login() {
    const [user, setUser] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passwordErr, setPassWord] = useState(false);


    function handleLogin(e) {
        e.preventDefault();
    }

    function userHandler(e) {
        let ulength = e.target.value.length;
        if (ulength > 3) {
            setUserErr(false);
        } else {
            setUserErr(true);
        }
        setUser(e.target.value);
    }

    function passwordHandler(e) {
        let plength = e.target.value.length;
        if (plength > 3) {
            setPassWord(false);
        } else {
            setPassWord(true);
        }
        setPassWord(e.target.value);
    }

    return (
        <div>
            <h1>Login </h1>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Enter your ID" onChange={userHandler} />
                {userErr ? <span>Not a valid user</span> : ""}
                <br />  <br /> 
                <input type="password" placeholder="Enter your Password"  onChange={passwordHandler} />
                {passwordErr ? <span>Not a valid password</span> : ""}

                <br />  <br /> 
                <button type="submit"> Login </button>
            </form>
        </div>
    );
}

export default Login;
