import React from 'react';
import useTimer from './useTimer';

const TimerComponent = () => {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-semibold mb-2">⏱ Timer: {timer}s</h2>
      <p className="mb-4">{isRunning ? "Running..." : "Stopped"}</p>

      <button onClick={startTimer} className="px-4 py-2 bg-green-500 text-white rounded mr-2">
        Start
      </button>
      <button onClick={stopTimer} className="px-4 py-2 bg-yellow-500 text-white rounded mr-2">
        Stop
      </button>
      <button onClick={resetTimer} className="px-4 py-2 bg-red-500 text-white rounded">
        Reset
      </button>
    </div>
  );
};

export default TimerComponent;
