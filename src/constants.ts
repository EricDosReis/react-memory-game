import { Brain, Clock, MousePointerClick, Sparkles, Zap } from "lucide-react";

const MAX_MOVEMENTS = 2;

const ONE_SECOND_IN_MS = 1000;
const ONE_MINUTE_IN_SECONDS = 60;

const EASY = "easy";
const MEDIUM = "medium";
const HARD = "hard";

const CARDS_DISPLAY_IN_MS = 700;

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

const EMOJIS = [
  "🍭",
  "🍬",
  "🍫",
  "🧁",
  "🍩",
  "🍪",
  "🍰",
  "🍦",
  "🍕",
  "🥖",
  "🥓",
  "❤️",
  "🛹",
  "🚀",
  "🪬",
  "🍔",
] as const;

const PAIR_COUNTS = {
  [EASY]: 4,
  [MEDIUM]: 8,
  [HARD]: 16,
} as const;

const DIFFICUTIES = [
  {
    label: "Easy",
    type: EASY,
    icon: Sparkles,
    color: "from-green-400 to-emerald-500",
  },
  {
    label: "Medium",
    type: MEDIUM,
    icon: Brain,
    color: "from-blue-400 to-indigo-500",
  },
  {
    label: "Hard",
    type: HARD,
    icon: Zap,
    color: "from-purple-400 to-purple-700",
  },
] as const;

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

export {
  ANIMATIONS,
  CARDS_DISPLAY_IN_MS,
  DIFFICUTIES,
  EASY,
  EMOJIS,
  HARD,
  MAX_MOVEMENTS,
  MEDIUM,
  ONE_MINUTE_IN_SECONDS,
  ONE_SECOND_IN_MS,
  PAIR_COUNTS,
  SCORE_ITEMS,
};
