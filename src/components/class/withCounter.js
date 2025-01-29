import React from "react";

const withCounter = (WrappedComponent, incrementCounterNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCounter = () => {
      this.setState((prevState) => ({
        count: prevState.count + incrementCounterNumber,
      }));
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCounter={this.incrementCounter}
          {...this.props}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;
