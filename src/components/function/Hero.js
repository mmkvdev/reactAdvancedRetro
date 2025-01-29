import React from "react";

function Hero({ heroName }) {
  if (heroName === "Joker") {
    throw new Error("Not a hero!");
  }

  const clickHandler = () => {
    try {
      throw new Error("click handler");
    } catch (err) {
      console.log("click handler error: ", err);
    }
  };

  return (
    <>
      <div>{heroName}</div>
      <button onClick={clickHandler}>Event!</button>
    </>
  );
}

export default Hero;
