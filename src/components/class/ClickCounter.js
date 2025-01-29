import React, { Component } from "react";
import withCounter from "./withCounter";

export class ClickCounter extends Component {
  render() {
    const { name, count, incrementCounter } = this.props;
    return (
      <div>
        <button onClick={incrementCounter}>
          {name} Clicked {count} times!
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 10);
