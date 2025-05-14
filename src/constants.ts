import { Brain, Clock, MousePointerClick, Sparkles, Zap } from "lucide-react";

const ANIMATIONS = {
  fadeInUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0 },
  },
  fadeInUpFadeOutDown: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 40 },
  },
} as const;

const EMOJIS = ["🍭", "🍬", "🍫", "🧁", "🍩", "🍪"] as const;

const CARDS = [...EMOJIS, ...EMOJIS]
  .sort(() => Math.random() - 0.5)
  .map((emoji, index) => ({
    id: index,
    emoji,
    isFlipped: false,
    isMatched: false,
  }));

const DIFFICUTIES = [
  {
    label: "Easy",
    value: "easy",
    icon: Sparkles,
    color: "from-green-400 to-emerald-500",
  },
  {
    label: "Medium",
    value: "medium",
    icon: Brain,
    color: "from-blue-400 to-indigo-500",
  },
  {
    label: "Hard",
    value: "hard",
    icon: Zap,
    color: "from-purple-400 to-purple-700",
  },
];

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

export { ANIMATIONS, CARDS, DIFFICUTIES, SCORE_ITEMS };
