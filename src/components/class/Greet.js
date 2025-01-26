import React from "react";

class GreetWithClass extends React.Component {
  render() {
    return <h1>Greetings from class: {this.props.name}</h1>;
  }
}

export default GreetWithClass;
