import { useCallback, useEffect, useState } from "react";

import { ONE_SECOND_IN_MS } from "@/constants";

const useTimer = (isRunning: boolean) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((previousTime) => previousTime + 1);
      }, ONE_SECOND_IN_MS);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const resetTimer = useCallback(() => setTime(0), []);

  return { time, resetTimer };
};

export { useTimer };
