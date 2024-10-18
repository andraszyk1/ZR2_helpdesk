import { useRef, useState } from "react";
interface props {
  counts: number;
}
export function AutoCounter({ counts }: props) {
  const [counter, setCounter] = useState<number>(0);
  const intervalRef = useRef<number | null>(null);
  const handleStartTimer = () => {
    if (intervalRef.current === null) {
     intervalRef.current = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    
    }
  };
  const handleStopTimer = () => {
    console.log("handleStopTimer");
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <>
      {counter}
      <button onClick={handleStartTimer}>start</button>
      <button onClick={handleStopTimer}>stop</button>
    </>
  );
}
