import React from "react";
import "../../styles/myStyles.css";

function StyleSheet({ primary }) {
  const color = primary ? "primary" : "secondary";
  return (
    <div>
      <h1 className={`${color} xl-font`}>Style Sheets</h1>
    </div>
  );
}

export default StyleSheet;
