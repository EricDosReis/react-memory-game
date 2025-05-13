import { CARDS } from "@/constants";
import { Card } from "./Card";

const Board = () => {
  return (
    <div className="grid grid-cols-4 gap-2 rounded-xl bg-blue-100 p-2">
      {CARDS.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export { Board };
