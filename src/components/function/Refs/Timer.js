import React, { useEffect, useState, useRef } from "react";

function FunctionTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();
  let interval;

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      Function Timer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Timer
      </button>
    </div>
  );
}

export default FunctionTimer;
