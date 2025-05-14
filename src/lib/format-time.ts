import { ONE_MINUTE_IN_SECONDS } from "@/constants";

const formatTime = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / ONE_MINUTE_IN_SECONDS);
  const seconds = (timeInSeconds % ONE_MINUTE_IN_SECONDS)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
};

export { formatTime };
