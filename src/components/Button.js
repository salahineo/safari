// Libraries
import React, {useState} from "react";

// Functional Component
const App = () => {
  // Create State (Initial value = 0) & SetState Method
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const [pauseFlag, setFlag] = useState(0);


  useEffect(() => {

    return () => {

      clearInterval(x)
    }
  }, [pauseFlag]);

  return (
    <div className="clicks">
      <span className="timer">{hours/60/60}:{mins/60}:{secs}</span>
      <button onClick={() => {
        let x = setInterval(() => {
          if (pauseFlag === 0) {
            setSecs(secs + 1)
          }
        }, 1000)
      }}>start</button>
      <button onClick={() => pauseFlag ? setFlag(0) : setFlag(1) }>Pause</button>
      <button onClick={() => setSecs(0)}>end</button>
    </div>
  );
};

// Export Component
export default App;
