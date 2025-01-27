import React, { Component } from "react";

export class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    const { isLoggedIn } = this.state;

    // using element variables
    let messageElement;
    // using if-else statements
    if (isLoggedIn) {
      messageElement = <div>Welcome MMK!</div>;
    } else {
      messageElement = <div>Welcome Guest!</div>;
    }

    // using ternary operator
    // return isLoggedIn ? <div>Welcome MMK!</div> : <div>Welcome Guest!</div>;

    // using short circuit operator
    return isLoggedIn && <div>Welcome MMK!</div>;
    // return <div>{messageElement}</div>;
  }
}

export default ConditionalRendering;
