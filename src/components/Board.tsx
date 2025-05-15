import { motion } from "motion/react";

import { ANIMATIONS, EASY, HARD, MEDIUM } from "@/constants";
import { cn } from "@/lib/utils";
import type { Card as CardType, Difficulty } from "@/types";
import { Card } from "./Card";

type BoardProps = {
  cards: CardType[];
  difficulty: Difficulty;
  onCardClick: (id: number) => void;
};

const GRID_CONFIG = {
  [EASY]: "",
  [MEDIUM]: "",
  [HARD]: "lg:grid-cols-8",
};

const Board = ({ cards, difficulty, onCardClick }: BoardProps) => {
  return (
    <motion.div
      {...ANIMATIONS.fadeInUp}
      className={cn(
        "grid grid-cols-4 gap-2 rounded-xl bg-blue-100 p-2 sm:gap-4 sm:p-4",
        GRID_CONFIG[difficulty],
      )}
    >
      {cards.map((card) => (
        <Card key={card.id} {...card} onClick={() => onCardClick(card.id)} />
      ))}
    </motion.div>
  );
};

export { Board };
