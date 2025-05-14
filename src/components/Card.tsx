import { Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Card as CardType } from "@/types";

const STYLES = {
  base: "backface-hidden absolute flex h-full w-full items-center justify-center rounded-xl border-2",
  front:
    "rotate-y-180 text-2xl xs:text-3xl sm:text-4xl border-purple-200 bg-white",
  back: "bg-pink border-white/20",
};

type CardProps = CardType & {
  onClick: () => void;
};

const Card = ({ emoji, isFlipped, isMatched, onClick }: CardProps) => {
  return (
    <button
      className="xs:h-20 xs:w-20 relative h-16 w-16 cursor-pointer sm:h-24 sm:w-24"
      type="button"
      onClick={onClick}
    >
      <div
        className={cn(
          "transform-3d duration-250 h-full w-full transition-transform",
          isFlipped && "rotate-y-180",
        )}
      >
        <div className={cn(STYLES.base, STYLES.back)}>
          <Sparkles className="h-6 w-6 animate-pulse text-white sm:h-8 sm:w-8" />
        </div>

        {isFlipped && (
          <div
            className={cn(
              STYLES.base,
              STYLES.front,
              isMatched && "bg-green-100",
            )}
          >
            {emoji}
          </div>
        )}
      </div>
    </button>
  );
};

export { Card };
