import { useState } from "react";

import { Board } from "@/components/Board";
import { DifficultySelector } from "@/components/DifficultySelector";
import { Layout } from "@/components/Layout";
import { Modal } from "@/components/Modal";
import { ScoreBoard } from "@/components/ScoreBoard";
import { AnimatePresence } from "motion/react";

const App = () => {
  const [showModal, setShowModal] = useState(true);
  const difficulty = "easy";

  const handleCloseModal = () => {
    setShowModal(false);
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
      <ScoreBoard moves={0} time={0} onRestart={() => {}} />

      <Board />

      <AnimatePresence>
        {showModal && <Modal moves={0} time={0} onRestart={handleCloseModal} />}
      </AnimatePresence>
    </Layout>
  );
};

export default App;
