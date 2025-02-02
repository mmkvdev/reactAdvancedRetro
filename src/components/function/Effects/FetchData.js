import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchData() {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  const [idOnButtonClick, setIdOnButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idOnButtonClick}`)
      .then((res) => {
        console.log("fetching data: ", res.data);
        setPost(res.data);
      })
      .catch(console.log);
  }, [idOnButtonClick]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => setIdOnButtonClick(id)}>Fetch Post</button>
      <p key={id}>{post.title}</p>
    </div>
  );
}

export default FetchData;
