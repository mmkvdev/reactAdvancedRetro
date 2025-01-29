import React, { Component } from "react";
import withCounter from "./withCounter";

export class HoverCounter extends Component {
  render() {
    const { name, count, incrementCounter } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCounter}>
          {name} Hover {count} times
        </h2>
      </div>
    );
  }
}

export default withCounter(HoverCounter, 5);
