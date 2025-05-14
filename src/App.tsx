import { AnimatePresence } from "motion/react";

import { Board } from "@/components/Board";
import { DifficultySelector } from "@/components/DifficultySelector";
import { Layout } from "@/components/Layout";
import { Modal } from "@/components/Modal";
import { ScoreBoard } from "@/components/ScoreBoard";
import { useMemoryGame } from "./hooks/use-memory-game";
import { formatTime } from "./lib/format-time";

const App = () => {
  const { cards, gameCompleted, handleCardClick, resetGame, moves, time } =
    useMemoryGame();

  const formattedTime = formatTime(time);

  const difficulty = "easy";

  const handleRestart = () => {
    resetGame();
  };

  if (!difficulty) {
    return (
      <Layout>
        <DifficultySelector />
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

      <Board cards={cards} onCardClick={handleCardClick} />

      <AnimatePresence>
        {gameCompleted && (
          <Modal moves={moves} time={formattedTime} onRestart={handleRestart} />
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default App;
