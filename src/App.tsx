import { Board } from "@/components/Board";
import { DifficultySelector } from "@/components/DifficultySelector";
import { Layout } from "@/components/Layout";
import { Modal } from "@/components/Modal";
import { ScoreBoard } from "@/components/ScoreBoard";
import { AnimatePresence } from "motion/react";
import { useMemoryGame } from "./hooks/use-memory-game";

const App = () => {
  const { cards, handleCardClick, resetGame } = useMemoryGame();

  console.log(cards);

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
      <ScoreBoard moves={0} time={0} onRestart={handleRestart} />

      <Board cards={cards} onCardClick={handleCardClick} />

      <AnimatePresence>
        {showModal && <Modal moves={0} time={0} onRestart={handleRestart} />}
      </AnimatePresence>
    </Layout>
  );
};

export default App;
