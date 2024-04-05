function Visaj(){
    function message(){
        alert("Button is clicked")
    }
   return <div>
     <button onClick={message}> CLICK </button>
     {/* <button onClick={ () => alert("Hello ji")}> CLICK </button> */}

     <p> Name : Visaj Panchal  </p>
     <p> Age : {11+11}  </p>
     <p> Height : 5ft 9 inches  </p>
     <p> Sex : Male   </p>

     </div> 
}

export default Visaj;