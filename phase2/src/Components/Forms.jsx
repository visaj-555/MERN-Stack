import React, { useState } from "react";

function Forms()
{
    const [name,setName] = useState (""); 
    const [age, setAge] = useState ("");
    const[tnc, setTNC] = useState ("false"); 
    const[choice, setChoice] = useState ("");

    function getFormData(e)
    {
        console.warn(name,age,tnc,choice);
        e.preventDefault()
    }

    getFormData(e);

    return (
        <div> 
            <h1> HANDLE FORM IN REACT JS</h1>

            <form>
            <input type="text" placeholder="Enter your name"  value = {name} onChange ={(e) => setName(e.target.value)} />
             <br />
            <input type="text" placeholder="Enter your age" onChange = {(e) => setAge(e.target.value)} /> <br />
            <select onChange = {(e) => setChoice(e.target.value)}>
             <br /> <br />
                <option value="marvel">Marvel</option>
                <option value="dc">DC</option>
                <option value="spyuninverse">SPY Universe</option>
            </select> <br /> <br />
            <input type = "checkbox" onChange = {(e) => setTNC(e.target.checked)} /> <span> Accept Terms and Conditions </span> 
            <br /> <br />
            <button type = "submit"> Submit  </button>
            </form>
        </div>
    )
}

export default Forms;