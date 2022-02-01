import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

function Timer({ questionNumber, setStop }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return setStop(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setStop]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);
  return timer;
}

export default Timer;
