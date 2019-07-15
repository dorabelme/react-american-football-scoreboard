import React, { useState } from "react";


function MyTimer(prop) {
    const [time, setTimer] = useState(3);
    return (
    useEffect(() => {
        setInterval(cb, 1500000){
            setTimer(time + 10);
            msTens.textContent = (timer / 10) % 10;
            msHundreds.textContent = Math.floor(timer / 100) % 10;
            secondOnes.textContent = Math.floor(timer / 1000) % 10;
            secondTens.textContent = Math.floor(timer / 10000) % 10;
        }
}, []);
    );
}




// import { useStopwatch } from "react-timer-hook";

// function MyStopwatch() {
//   const { seconds, minutes, days, hours, start, pause, reset } = useStopwatch({
//     autoStart: true
//   });

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>react-timer-hook</h1>
//       <p>Stopwatch Demo</p>
//       <div style={{ fontSize: "100px" }}>
//         <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
//         <span>{seconds}</span>
//       </div>
//       <button onClick={start}>Start</button>
//       <button onClick={pause}>Pause</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

export default MyTimer;


