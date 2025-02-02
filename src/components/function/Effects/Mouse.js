import React, { useEffect, useState } from "react";

function Mouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", (e) => {
      console.log("log mouse position");
      setX(e.clientX);
      setY(e.clientY);
    });
  }, []);

  return (
    <div>
      X - {x} Y - {y}
    </div>
  );
}

export default Mouse;
