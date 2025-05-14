import { AnimatePresence } from "motion/react";

import { Board } from "@/components/Board";
import { DifficultySelector } from "@/components/DifficultySelector";
import { Layout } from "@/components/Layout";
import { Modal } from "@/components/Modal";
import { ScoreBoard } from "@/components/ScoreBoard";
import { useMemoryGame } from "./hooks/use-memory-game";

const App = () => {
  const { cards, handleCardClick, resetGame, moves, time } = useMemoryGame();

  const showModal = false;
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
      <ScoreBoard moves={moves} time={time} onRestart={handleRestart} />

      <Board cards={cards} onCardClick={handleCardClick} />

      <AnimatePresence>
        {showModal && (
          <Modal moves={moves} time={time} onRestart={handleRestart} />
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default App;
