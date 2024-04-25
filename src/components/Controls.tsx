import { PlusIcon } from "@heroicons/react/24/outline";
import { MinusIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

interface ControlsProps {
  label: string;
  type: string;
  state: number;
  stateDispatch: Dispatch<SetStateAction<number>>;
  timerState: boolean;
}

function Controls({
  label,
  type,
  state,
  timerState,
  stateDispatch,
}: ControlsProps) {
  const handleDecrement = () => {
    // the state cannot be lower than 0
    if (state === 1) {
      stateDispatch(1);
    } else {
      stateDispatch((prev) => prev - 1);
    }
  };

  const handleIncrement = () => {
    // the state cannot be greater than 60 (an hour)
    if (state === 60) {
      stateDispatch(60);
    } else {
      stateDispatch((prev) => prev + 1);
    }
  };
  return (
    <div className="space-y-3 p-4 rounded flex flex-col justify-center items-center">
      <div>
        <h2 id={`${type}-label`} className="text-2xl md:text-3xl font-semibold">
          {label}
        </h2>
      </div>
      <div id="controls" className="flex items-center gap-5 justify-center">
        <button
          id={`${type}-decrement`}
          onClick={handleDecrement}
          disabled={timerState}
          className="rounded-full shadow p-2 border border-slate-600 hover:bg-zinc-800"
        >
          <MinusIcon className="w-6 h-6 text-white" />
        </button>
        <span
          className="text-lg select-none w-8 text-center"
          id={`${type}-length`}
        >
          {state}
        </span>
        <button
          id={`${type}-increment`}
          onClick={handleIncrement}
          disabled={timerState}
          className="rounded-full shadow p-2 border border-slate-600 hover:bg-zinc-800"
        >
          <PlusIcon className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}

export default Controls;
