import { motion } from "motion/react";

import { ANIMATIONS } from "@/constants";

type ModalProps = {
  moves: number;
  time: string;
  onRestart: () => void;
};

const Modal = ({ moves, time, onRestart }: ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <motion.div
        {...ANIMATIONS.fadeInUpFadeOutDown}
        className="max-w-sm rounded-xl bg-white p-6 text-center"
      >
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
          🎉 Congratulations! 🎉
        </h2>

        <p className="mb-6 text-lg">
          You completed the game in <br /> <b>{moves} moves</b> and{" "}
          <b>{time}</b>.
        </p>

        <button
          className="bg-pink rounded-lg px-6 py-3 font-medium text-white transition-opacity hover:opacity-80"
          onClick={onRestart}
        >
          Play Again
        </button>
      </motion.div>
    </div>
  );
};

export { Modal };
