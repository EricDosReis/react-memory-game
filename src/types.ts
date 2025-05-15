type Card = {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
};

type Difficulty = "easy" | "medium" | "hard";

export type { Card, Difficulty };
