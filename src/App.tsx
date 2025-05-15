import { AnimatePresence } from "motion/react";
import { useState } from "react";

import { Board } from "@/components/Board";
import { DifficultySelector } from "@/components/DifficultySelector";
import { Layout } from "@/components/Layout";
import { Modal } from "@/components/Modal";
import { ScoreBoard } from "@/components/ScoreBoard";
import { useMemoryGame } from "@/hooks/use-memory-game";
import { formatTime } from "@/lib/format-time";
import type { Difficulty } from "@/types";

const App = () => {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);

  const { cards, gameCompleted, handleCardClick, resetGame, moves, time } =
    useMemoryGame(difficulty || "easy");

  const formattedTime = formatTime(time);

  console.log(difficulty);

  const handleRestart = () => {
    setDifficulty(null);
    resetGame();
  };

  if (!difficulty) {
    return (
      <Layout>
        <DifficultySelector onSelect={setDifficulty} />
      </Layout>
    );
  }

  return (
    <Layout>
      <ScoreBoard
        moves={moves}
        time={formattedTime}
        onRestart={handleRestart}
      />

      <Board
        cards={cards}
        difficulty={difficulty}
        onCardClick={handleCardClick}
      />

      <AnimatePresence>
        {gameCompleted && (
          <Modal moves={moves} time={formattedTime} onRestart={handleRestart} />
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default App;
