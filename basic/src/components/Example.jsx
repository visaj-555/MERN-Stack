function Example (props)
{
   // console.log(props);

    return (
        
        <div style={ {backgroundColor : "skyblue", margin : 10}}>
            <h3>Props using Functional Component</h3>
            <h4> Name : {props.name}  </h4>
            <h4> Email: {props.email}  </h4>
            <h4> Address : {props.other.address}</h4>
            <h4> Number : {props.other.number}</h4>

        </div>
    )

}


export default Example;