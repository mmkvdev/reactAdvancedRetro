import React, { Component } from "react";

export class ClickCounter2 extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Clicked {count}</button>
      </div>
    );
  }
}

export default ClickCounter2;
