import React,{ usestate, use }from 'react';

function Hooks(){

    const [data,setData] = useState("Visaj");
    return (
        
            <div>
                <h1> Hello {data}</h1>
                <button onClick={() => setData("Ayushi")}> Update Data </button>
            </div>
        
    );
}

export default Hooks;