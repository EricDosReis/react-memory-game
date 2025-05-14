import { useEffect, useState } from "react";

import { CARDS_DISPLAY_IN_MS, MAX_MOVEMENTS } from "@/constants";
import { createShuffledCards } from "@/lib/create-shuffled-cards";
import { Card } from "@/types";
import { useTimer } from "./use-timer";

const useMemoryGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [moves, setMoves] = useState(0);

  const { time } = useTimer(gameStarted);

  const initializeGame = () => {
    setCards(createShuffledCards());
  };

  const handleCardClick = (id: number) => {
    if (!gameStarted) {
      setGameStarted(true);
    }

    const clickedCard = cards.find((card) => card.id === id)!;

    if (
      flippedCards.length === MAX_MOVEMENTS ||
      clickedCard.isFlipped ||
      clickedCard.isMatched
    ) {
      return;
    }

    setCards((previousCards) =>
      previousCards.map((card) =>
        card.id === id ? { ...card, isFlipped: true } : card,
      ),
    );

    const newFlippedCards = [...flippedCards, clickedCard];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === MAX_MOVEMENTS) {
      setMoves((previousMoves) => previousMoves + 1);

      const [firstCard, secondCard] = newFlippedCards;
      const isMatched = firstCard.emoji === secondCard.emoji;

      setTimeout(() => {
        const updatedCard = cards.map((card) => {
          if (card.id === firstCard.id || card.id === secondCard.id) {
            return { ...card, isFlipped: isMatched, isMatched };
          }

          return card;
        });

        setCards(updatedCard);
        setFlippedCards([]);
      }, CARDS_DISPLAY_IN_MS);
    }
  };

  useEffect(initializeGame, []);

  return {
    cards,
    handleCardClick,
    resetGame: initializeGame,
    moves,
    time,
  };
};

export { useMemoryGame };
