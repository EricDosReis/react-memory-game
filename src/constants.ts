import { Clock, MousePointerClick } from "lucide-react";

const EMOJIS = ["🍭", "🍬", "🍫", "🧁", "🍩", "🍪"] as const;

const CARDS = [...EMOJIS, ...EMOJIS]
  .sort(() => Math.random() - 0.5)
  .map((emoji, index) => ({
    id: index,
    emoji,
    isFlipped: false,
    isMatched: false,
  }));

const SCORE_ITEMS = [
  {
    icon: MousePointerClick,
    label: "Moves",
    color: "text-yellow-400",
  },
  {
    icon: Clock,
    label: "Time",
    color: "text-blue-400",
  },
];

export { CARDS, SCORE_ITEMS };
