import { motion } from "motion/react";

import { ANIMATIONS } from "@/constants";
import { Card as CardType } from "@/types";
import { Card } from "./Card";

type BoardProps = {
  cards: CardType[];
  onCardClick: (id: number) => void;
};

const Board = ({ cards, onCardClick }: BoardProps) => {
  return (
    <motion.div
      {...ANIMATIONS.fadeInUp}
      className="grid grid-cols-4 gap-2 rounded-xl bg-blue-100 p-2 sm:gap-4 sm:p-4"
    >
      {cards.map((card) => (
        <Card key={card.id} {...card} onClick={() => onCardClick(card.id)} />
      ))}
    </motion.div>
  );
};

export { Board };
