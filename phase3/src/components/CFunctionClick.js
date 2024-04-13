import React, { Component } from 'react';
const array = [1,3,4,6];
// const newarray = array.map(function(array){
//   console.log(newarray);
//   return <li> {array}</li>
// });

export class CFunctionClick extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     course: "Reactjs Course"
  //   };
  // }

  constructor(props) {
    super(props);
    this.state = {
      course: "Reactjs Course",
      roll : this.props.roll
    };
  }

  changeEvent = () => {
    console.log(this.props.roll);
  }

  render() {
    return ( 
      <React.Fragment>
        <button onClick={this.changeEvent}>Click Me</button>
        <u> {array}</u>
        </React.Fragment>
    );
  }
}

export default CFunctionClick;
