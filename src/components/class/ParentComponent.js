import React, { Component } from "react";
import RegularComponent from "./RegularComponent";
import PureComponent from "./PureComponent";

export class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "MMK",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "MMK",
      });
    }, 2000);
  }

  render() {
    console.log("***********Parent Component Render***********");
    return (
      <>
        <p>Parent Component</p>
        <RegularComponent name={this.state.name} />
        <PureComponent name={this.state.name} />
      </>
    );
  }
}

export default ParentComponent;
