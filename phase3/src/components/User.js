import React from 'react';
function User(props){
    return (
        <div>
            <h1>Passing props in function </h1>
            <button onClick= {props.data} > Click to call the function </button>

        </div>
    );
}

export default User;