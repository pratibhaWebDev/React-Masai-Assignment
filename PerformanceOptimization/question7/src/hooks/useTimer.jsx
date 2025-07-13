// useTimer.js
import { useState, useRef, useEffect } from "react";

const useTimer = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTimer(0);
    setIsRunning(false);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current); // cleanup on unmount
    };
  }, []);

  return { timer, isRunning, startTimer, stopTimer, resetTimer };
};

export default useTimer;
