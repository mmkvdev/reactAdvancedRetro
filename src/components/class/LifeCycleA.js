import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "MMK",
    };

    this.changeState = this.changeState.bind(this);
    console.log("Life cycle A constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Life cycle A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Life cycle A componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Life cycle A shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Life cycle A getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Life cycle A componentDidUpdate");
  }

  changeState() {
    this.setState({
      name: "Varma",
    });
  }
  render() {
    console.log("Life cycle A rendered");
    return (
      <>
        <div>Life Cycle A Method: {this.state.name}</div>
        <button onClick={this.changeState}>Change State!</button>
        <LifeCycleB />
      </>
    );
  }
}

export default LifeCycleA;
