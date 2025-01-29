import React from "react";

function Hero({ heroName }) {
  if (heroName === "Joker") {
    throw new Error("Not a hero!");
  }

  const clickHandler = () => {
    throw new Error("click handler");
  };

  return (
    <>
      <div>{heroName}</div>
      <button onClick={clickHandler}>Event!</button>
    </>
  );
}

export default Hero;
