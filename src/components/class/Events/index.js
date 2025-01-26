import React, { Component } from "react";

export class ClassClick extends Component {
  clickHandler() {
    console.log("button clicked");
  }
  render() {
    return <button onClick={this.clickHandler}>Click!</button>;
  }
}

export default ClassClick;
