import React, { Component } from "react";

export class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "MMK",
    };
    console.log("Life cycle B constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Life cycle B getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Life cycle B componentDidMount");
  }

  render() {
    console.log("Life cycle B rendered");
    return <div>Life Cycle B Method</div>;
  }
}

export default LifeCycleB;
