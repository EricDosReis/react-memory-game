import { ANIMATIONS, CARDS } from "@/constants";
import { motion } from "motion/react";
import { Card } from "./Card";

const Board = () => {
  return (
    <motion.div
      {...ANIMATIONS.fadeInUp}
      className="grid grid-cols-4 gap-2 rounded-xl bg-blue-100 p-2 sm:gap-4 sm:p-4"
    >
      {CARDS.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </motion.div>
  );
};

export { Board };
