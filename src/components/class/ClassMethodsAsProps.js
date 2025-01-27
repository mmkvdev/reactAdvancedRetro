import React, { Component } from "react";
import FunctionMethodsAsProps from "../Function/FunctionMethodsAsProps";

export class ClassMethodAsProps extends Component {
  constructor() {
    super();
    this.state = {
      message: "Currently Child Component",
    };
  }

  changeMessage = (childMessage) => {
    this.setState({
      message: `Called from ${childMessage}`,
    });
  };

  render() {
    return (
      <>
        <div>{this.state.message}</div>
        <FunctionMethodsAsProps changeMessage={this.changeMessage} />
      </>
    );
  }
}

export default ClassMethodAsProps;
