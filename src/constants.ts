const EMOJIS = ["🍭", "🍬", "🍫", "🧁", "🍩", "🍪"] as const;

const CARDS = [...EMOJIS, ...EMOJIS]
  .sort(() => Math.random() - 0.5)
  .map((emoji, index) => ({
    id: index,
    emoji,
    isFlipped: false,
    isMatched: false,
  }));

export { CARDS };
