import { ANIMATIONS, SCORE_ITEMS } from "@/constants";
import { formatTime } from "@/lib/format-time";
import { RotateCcw } from "lucide-react";
import { motion } from "motion/react";
import { ScoreBoardItem } from "./ScoreBoardItem";

type ScoreBoardProps = {
  moves: number;
  time: number;
  onRestart: () => void;
};

const ScoreBoard = ({ moves, time, onRestart }: ScoreBoardProps) => {
  return (
    <motion.div
      {...ANIMATIONS.fadeInDown}
      className="flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-blue-100 p-4 sm:w-auto sm:flex-row sm:gap-8"
    >
      {SCORE_ITEMS.map(({ icon, label, color }) => (
        <ScoreBoardItem
          key={label}
          icon={icon}
          label={label}
          color={color}
          value={label === "Moves" ? moves : formatTime(time)}
        />
      ))}

      <button
        className="hover:text-pink group flex cursor-pointer items-center gap-2 px-2 text-base text-white"
        onClick={onRestart}
      >
        <RotateCcw className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
        Restart
      </button>
    </motion.div>
  );
};

export { ScoreBoard };
