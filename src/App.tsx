import { useState } from "react";

import { Board } from "@/components/Board";
import { Modal } from "@/components/Modal";
import { ScoreBoard } from "@/components/ScoreBoard";

const App = () => {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-blue-200">
      <ScoreBoard moves={0} time={0} onRestart={() => {}} />

      <Board />

      {showModal && <Modal moves={0} time={0} onRestart={handleCloseModal} />}
    </div>
  );
};

export default App;
