import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { useState } from "react";

const STYLES = {
  base: "backface-hidden absolute flex h-full w-full items-center justify-center rounded-xl border-2",
  front: "bg-pink border-white/20",
  back: "rotate-y-180 text-2xl xs:text-3xl sm:text-4xl border-purple-200 bg-white",
};

type CardProps = {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
};

const Card = ({ emoji }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <button
      className="xs:h-20 xs:w-20 relative h-16 w-16 cursor-pointer sm:h-24 sm:w-24"
      type="button"
      onClick={handleClick}
    >
      <div
        className={cn(
          "transform-3d duration-250 h-full w-full transition-transform",
          isFlipped && "rotate-y-180",
        )}
      >
        <div className={cn(STYLES.base, STYLES.front)}>
          <Sparkles className="h-6 w-6 animate-pulse text-white sm:h-8 sm:w-8" />
        </div>

        {isFlipped && (
          <div className={cn(STYLES.base, STYLES.back)}>{emoji}</div>
        )}
      </div>
    </button>
  );
};

export { Card };
