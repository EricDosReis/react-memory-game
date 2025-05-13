import { SCORE_ITEMS } from "@/constants";
import { RotateCcw } from "lucide-react";
import { ScoreBoardItem } from "./ScoreBoardItem";

type ScoreBoardProps = {
  moves: number;
  time: number;
  onRestart: () => void;
};

const ScoreBoard = ({ moves, time, onRestart }: ScoreBoardProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-blue-100 p-4 sm:w-auto sm:flex-row sm:gap-8">
      {SCORE_ITEMS.map(({ icon, label, color }) => (
        <ScoreBoardItem
          key={label}
          icon={icon}
          label={label}
          color={color}
          value={label === "Moves" ? moves : time}
        />
      ))}

      <button
        className="hover:text-pink group flex cursor-pointer items-center gap-2 px-2 text-base text-white"
        onClick={onRestart}
      >
        <RotateCcw className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
        Restart
      </button>
    </div>
  );
};

export { ScoreBoard };
