import React from "react";

function FunctionNameList() {
  const names = ["Bruce", "Clark", "Diana"];
  const namesList = names.map((name, index) => <h2 key={index}>{name}</h2>);
  return <div>{namesList}</div>;
}

export default FunctionNameList;
