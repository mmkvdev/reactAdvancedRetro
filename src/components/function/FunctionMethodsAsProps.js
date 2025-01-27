import React from "react";

function FunctionMethodsAsProps({ changeMessage }) {
  return (
    <div>
      <button onClick={() => changeMessage("child here!")}>Greet</button>
    </div>
  );
}

export default FunctionMethodsAsProps;
