import type { Card } from "@/types";

const checkGameCompletion = (cards: Card[]) => {
  return cards.every((card) => card.isMatched);
};

export { checkGameCompletion };
