import React from "react";

class Channel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Mumbiker Nikhil Youtube Channel"
    };
  }

  subscribe = () => {
    this.setState({
      msg: "Thank you for Subscribing to Mumbiker Nikhil Youtube Channel"
    });
  }

  render() {
    return (
      <div>
        <h4>{this.state.msg}</h4>
        <button onClick={this.subscribe}>Subscribe</button>
      </div>
    );
  }
}

export default Channel;
