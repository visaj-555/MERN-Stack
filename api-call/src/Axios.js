import React, { useEffect, useState } from "react";
import axios from "axios";

function Axios() {
    const [userData, setData] = useState([]);
    
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response);
            setData(response.data);
        })
        .catch((error) => {
            console.log("Error:", error);
        });
    }, []);
    
    return (
        <React.Fragment>
            {userData.map((data) => (
                <h1 key={data.id}> {data.username} </h1>
            ))}
        </React.Fragment>
    );
}

export default Axios;
