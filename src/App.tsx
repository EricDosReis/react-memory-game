import { Board } from "@/components/Board";
import { ScoreBoard } from "./components/ScoreBoard";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-blue-200">
      <ScoreBoard moves={0} time={0} onRestart={() => {}} />
      <Board />
    </div>
  );
};

export default App;
