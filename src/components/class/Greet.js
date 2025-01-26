import React from "react";

class GreetWithClass extends React.Component {
  render() {
    const { name } = this.props;
    return <h1>Greetings from class: {name}</h1>;
  }
}

export default GreetWithClass;
