import { EMOJIS, PAIR_COUNTS } from "@/constants";
import type { Difficulty } from "@/types";

const createShuffledCards = (difficulty: Difficulty) => {
  const pairs = PAIR_COUNTS[difficulty];
  const gameEmojis = [...EMOJIS]
    .sort(() => Math.random() - 0.5)
    .slice(0, pairs);

  return [...gameEmojis, ...gameEmojis].map((emoji, index) => ({
    id: index,
    emoji,
    isFlipped: false,
    isMatched: false,
  }));
};

export { createShuffledCards };
