import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type ScoreBoardItemProps = {
  color: string;
  icon: LucideIcon;
  label: string;
  value: string | number;
};

const ScoreBoardItem = ({
  label,
  icon: Icon,
  color,
  value,
}: ScoreBoardItemProps) => {
  return (
    <div className="flex min-w-[130px] items-center justify-center gap-2 text-lg text-white">
      <Icon className={cn("h-5 w-5", color)} />
      {label}: <span className="min-w-[16px]">{value}</span>
    </div>
  );
};

export { ScoreBoardItem };
