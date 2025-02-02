import React, { Component } from "react";

export class EffectsWithClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("updating document title");
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(event) => {
            this.setState({
              name: event.target.name,
            });
          }}
        />
        <button
          onClick={() => {
            this.setState((prevState) => ({
              count: prevState.count + 1,
            }));
          }}
        >
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default EffectsWithClass;
