import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };

    this.changeMessage = this.changeMessage.bind(this);
  }

  //   changeMessage() {
  //     this.setState({
  //       message: "Good Bye!",
  //     });
  //   }

  changeMessage = () => {
    this.setState({
      message: "Good Bye!",
    });
  };

  render() {
    return (
      <>
        <div>{this.state.message}</div>
        {/* <button onClick={() => this.changeMessage()}>Click!</button> */}
        {/* <button onClick={this.changeMessage.bind(this)}>Click!</button> */}
        {/* <button onClick={this.changeMessage}>Click!</button> */}
        <button onClick={this.changeMessage}>Click!</button>
      </>
    );
  }
}

export default EventBind;
