import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "MMK",
    };
    console.log("Life cycle A constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Life cycle A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Life cycle A componentDidMount");
  }

  render() {
    console.log("Life cycle A rendered");
    return (
      <>
        <div>Life Cycle A Method</div>
        <LifeCycleB />
      </>
    );
  }
}

export default LifeCycleA;
