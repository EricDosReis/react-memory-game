import { useEffect, useState } from "react";

import { CARDS_DISPLAY_IN_MS, MAX_MOVEMENTS } from "@/constants";
import { checkGameCompletion } from "@/lib/check-game-completion";
import { createShuffledCards } from "@/lib/create-shuffled-cards";
import type { Card, Difficulty } from "@/types";
import { useTimer } from "./use-timer";

const useMemoryGame = (difficulty: Difficulty) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [moves, setMoves] = useState(0);

  const { time, resetTimer } = useTimer(gameStarted && !gameCompleted);

  const initializeGame = () => {
    setCards(createShuffledCards(difficulty));
    setGameStarted(false);
    setGameCompleted(false);
    setFlippedCards([]);
    setMoves(0);
    resetTimer();
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
        const updatedCards = cards.map((card) => {
          if (card.id === firstCard.id || card.id === secondCard.id) {
            return { ...card, isFlipped: isMatched, isMatched };
          }

          return card;
        });

        setCards(updatedCards);
        setFlippedCards([]);

        if (isMatched && checkGameCompletion(updatedCards)) {
          setGameCompleted(true);
        }
      }, CARDS_DISPLAY_IN_MS);
    }
  };

  useEffect(initializeGame, [difficulty, resetTimer]);

  return {
    cards,
    gameCompleted,
    handleCardClick,
    resetGame: initializeGame,
    moves,
    time,
  };
};

export { useMemoryGame };
