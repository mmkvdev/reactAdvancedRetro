import axios from "axios";
import React, { Component } from "react";

export class PushListData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };

    this.inputRef = React.createRef(null);
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentDidMount() {
    this.inputRef.current.focus();
  }

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);

    try {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          ...this.state,
        })
        .then((res) => alert("data pushed successfully", res))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log({ err });
    }
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <input
            type="text"
            name="userId"
            value={userId}
            ref={this.inputRef}
            onChange={this.changeHandler}
          />
        </div>
        <div>
          <input name="title" value={title} onChange={this.changeHandler} />
        </div>
        <div>
          <input name="body" value={body} onChange={this.changeHandler} />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default PushListData;
