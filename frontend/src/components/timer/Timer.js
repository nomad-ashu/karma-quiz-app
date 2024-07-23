import React, { useState, useEffect } from 'react';

const Timer = ({ startingMinutes }) => {
  const [timeInSeconds, setTimeInSeconds] = useState(startingMinutes * 60);
  const [timerStatus, setTimerStatus] = useState('Timer Running');

  useEffect(() => {
    // Exit early when we reach 0
    if (timeInSeconds === 0) {
        setTimerStatus('Timer Up')
        return;
    }

    // Save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeInSeconds(timeInSeconds - 1);
    }, 1000);

    // Clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // Add timeInSeconds as a dependency to reset interval
  }, [timeInSeconds]);

  useEffect(() => {
    if (timeInSeconds > 0) {
        setTimerStatus('Timer Running')
    }
  },[timeInSeconds])

  // Format the time to display in minutes and seconds
  const formatTime = () => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="app">
      <div className="time">
        {formatTime()} {/* Display formatted time */}
      </div>
      <div className="status">
        {timerStatus}
      </div>
    </div>
  );
};

export default Timer;
