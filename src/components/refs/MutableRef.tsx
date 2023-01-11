import { useRef, useEffect, useState } from "react";

export const MutableRef = () => {
  const [timer, settimer] = useState(0);
  const interValRef = useRef<number | undefined>(undefined);
  function stopTimer() {
    window.clearInterval(interValRef.current);
  }
  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      settimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      Timer - {timer}
      <button onClick={() => stopTimer()}>Stop</button>
    </div>
  );
};
