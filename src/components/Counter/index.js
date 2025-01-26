import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("callback value: ", this.state.count);
    //   }
    // );

    // update the state based on previous state, use callback as an argument to `setState` method
    this.setState(
      // updating state based on the previous state value -> functional updater form
      (prevState, props) => ({
        count: prevState.count + 1 + props.rank,
      }),
      console.log(this.state.count)
    );
  }

  incrementFive() {
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  }
  render() {
    return (
      <div style={{ margin: "50px" }}>
        <div>count: {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
