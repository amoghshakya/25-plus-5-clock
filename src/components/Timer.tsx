import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import alarmSound from "/alarm.mp3";

interface TimerProps {
  breakLength: number;
  sessionLength: number;
  breakDispatch: Dispatch<SetStateAction<number>>;
  sessionDispatch: Dispatch<SetStateAction<number>>;
  timerDispatch: Dispatch<SetStateAction<boolean>>;
}

function Timer({
  breakLength,
  sessionLength,
  breakDispatch: setBreakLength,
  sessionDispatch: setSessionLength,
  timerDispatch: setIsTimerRunning,
}: TimerProps) {
  const [mode, setMode] = useState<"session" | "break">("session");
  const [isPaused, setIsPaused] = useState(true);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);

  const audioRef = useRef<HTMLAudioElement>(null);

  // update time left when sessionLength updates
  useEffect(() => {
    setTimeLeft(sessionLength * 60);
  }, [sessionLength]);

  useEffect(() => {
    let intervalId: number | undefined;

    if (!isPaused && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (mode === "session") {
        setMode("break");
        setTimeLeft(breakLength * 60);
      } else {
        setMode("session");
        setTimeLeft(sessionLength * 60);
      }
      if (audioRef.current) {
        audioRef.current.play();
      }
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isPaused, timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;

    return `${minutes}:${secondsRemaining.toString().padStart(2, "0")}`;
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
    setIsTimerRunning(isPaused);
  };

  const handleReset = () => {
    setIsPaused(true);
    setSessionLength(25);
    setBreakLength(5);
    setTimeLeft(25 * 60);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-3xl shadow w-60 md:w-72  border border-slate-700 px-12 p-5">
      <div className="flex flex-col items-center justify-center">
        <h3 id="timer-label" className="text-xl">
          {/* Capitalizing the first letter of the mode */}
          {mode.replace(mode[0], mode.toUpperCase()[0])}
        </h3>
        <span id="time-left" className="text-6xl md:text-7xl">
          {formatTime(timeLeft)}
        </span>
      </div>
      <div className="space-x-3">
        <button id="start_stop" onClick={togglePause}>
          {isPaused ? (
            <PlayIcon className="h-8 w-8 text-white" />
          ) : (
            <PauseIcon className="h-8 w-8 text-white" />
          )}
        </button>
        <button id="reset" onClick={handleReset}>
          <ArrowPathIcon className="h-8 w-8 text-white" />
        </button>
      </div>
      <audio id="beep" src={alarmSound} ref={audioRef}></audio>
    </div>
  );
}

export default Timer;
