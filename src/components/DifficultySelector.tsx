import { DIFFICUTIES } from "@/constants";
import { cn } from "@/lib/utils";

const DifficultySelector = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <h2 className="mb-2 text-center text-2xl font-bold text-white sm:mb-4 sm:text-3xl">
        Select Difficulty
      </h2>

      <div className="flex w-full flex-col justify-center gap-3 sm:flex-row sm:gap-4">
        {DIFFICUTIES.map(({ label, value, icon: Icon, color }) => (
          <button
            key={label}
            type="button"
            className={cn(
              "flex h-20 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-b font-semibold sm:h-32 sm:w-32 sm:flex-col",
              color,
            )}
          >
            <Icon className="h-6 w-6 sm:h-8 sm:w-8" />

            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export { DifficultySelector };
