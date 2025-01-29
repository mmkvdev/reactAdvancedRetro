import React, { Component } from "react";
import axios from "axios";

export class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMessage: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts1")
      .then((res) => {
        console.log(res);
        this.setState({
          posts: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorMessage: "Error while fetching the data",
        });
      });
  }

  render() {
    const { posts, errorMessage } = this.state;
    return (
      <>
        {posts.length
          ? posts.map((post) => <p key={post.id}>{post.title}</p>)
          : null}
        {errorMessage && <div>{errorMessage}</div>}
      </>
    );
  }
}

export default PostList;
