"use client";

import { useEffect, useState } from "react";

const GetCurrentTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTime(
        date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
};

export default GetCurrentTime;
