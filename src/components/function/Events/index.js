import React from "react";

function FunctionClick() {
  const clickHandler = () => {
    console.log("button clicked");
  };

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
