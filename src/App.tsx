import { useState } from "react";
import Controls from "./components/Controls";
import Timer from "./components/Timer";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-2 gap-y-10">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold">25 + 5 Clock</h1>
      </div>
      <div className="flex md:flex-row flex-col gap-8 justify-center">
        <Controls
          label="Break Length"
          type="break"
          state={breakLength}
          stateDispatch={setBreakLength}
          timerState={isTimerRunning}
        />
        <Controls
          label="Session Length"
          type="session"
          state={sessionLength}
          stateDispatch={setSessionLength}
          timerState={isTimerRunning}
        />
      </div>
      <Timer
        breakLength={breakLength}
        sessionLength={sessionLength}
        breakDispatch={setBreakLength} // these are only required for the reset functionality i suppose
        sessionDispatch={setSessionLength}
        timerDispatch={setIsTimerRunning}
      />
    </div>
  );
}

export default App;
