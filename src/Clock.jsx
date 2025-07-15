import React, { useEffect, useState } from "react";
import "./Clock.css";

function Clock() {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  useEffect(() => {
    // run this only once on component mount
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // cleanup to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Update Time</button>
      <button
        onClick={() => {
          setTime(new Date().toLocaleDateString());
        }}
      >
        Change Time To Today's Date
      </button>
    </div>
  );
}

export default Clock;
