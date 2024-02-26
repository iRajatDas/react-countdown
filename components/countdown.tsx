"use client";

import React, { useEffect, useState } from "react";

const initialRemainingTime = {
  days: 8,
  hours: 12,
  minutes: 44,
  seconds: 28,
};

const Countdown = () => {
  const [remainingTime, setRemainingTime] = useState(initialRemainingTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, seconds: 59, minutes: prev.minutes - 1 };
        } else if (prev.hours > 0) {
          return { ...prev, minutes: 59, hours: prev.hours - 1 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            hours: 23,
            minutes: 59,
            seconds: 59,
            days: prev.days - 1,
          };
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTimeUnit = (unit: number) => {
    return unit.toString().padStart(2, "0");
  };

  // Destructure the updated remainingTime object
  const { days, hours, minutes, seconds } = remainingTime;

  return (
    <React.Fragment>
      <header className="text-3xl md:text-4xl font-bold text-indigo-500 uppercase tracking-[3.78px] max-md:max-w-full text-center">
        Ready to launch in...
      </header>
      <div className="flex gap-5 justify-around mt-9 text-sm font-light capitalize whitespace-nowrap text-[#C8C8C8] max-md:flex-wrap max-md:max-w-full">
        <p>Days</p>
        <p>Hours</p>
        <p>Minutes</p>
        <p>seconds</p>
      </div>
      <div className="mt-7 text-7xl text-zinc-600 max-md:max-w-full max-md:text-4xl text-center flex items-center justify-around">
        <span>{formatTimeUnit(days)}</span> :{" "}
        <span>{formatTimeUnit(hours)}</span> :{" "}
        <span>{formatTimeUnit(minutes)}</span> :{" "}
        <span>{formatTimeUnit(seconds)}</span>
      </div>
    </React.Fragment>
  );
};

export default Countdown;
