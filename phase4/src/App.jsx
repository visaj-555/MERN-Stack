import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Student from './components/Student';
import User from './components/User';

function App() {
  // const [data, setData] = useState("Visaj");
  // function handleClick(){
  //   <Alert variant="success">
  //   This is a success alert—check it out!
  //   </Alert>  
  // }

  function parentAlert(data){
    alert(data);
  }


  return (
    <React.Fragment>

      <Student>
        
      </Student>
    {/* //   <h1> Hello {data}</h1>
    //   <button onClick={() => setData("SRK")}> Update Data </button>  */}
      {/* <h1> Bootstrap testing </h1>
      <Button onClick={handleClick}> Click me </Button>
     
    <Card>
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}
      <User alert = {parentAlert}> 
        </User>
    </React.Fragment>
  );
}

export default App;
