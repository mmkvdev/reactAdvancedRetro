import React, { Component } from "react";
import ForwardRef from "../Function/ForwardRef";

class ForwardRefParent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef(null);
  }

  focusHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <ForwardRef ref={this.inputRef} />
        <button onClick={this.focusHandler}>Focus!</button>
      </div>
    );
  }
}

export default ForwardRefParent;
