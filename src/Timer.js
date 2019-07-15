import React, { useEffect } from "react";
import { useState } from "react";


function MyTimer(props) {
    console.log("here"); 
    const [timer, setTimer] = useState(900);
    // let msTens = (timer / 10) % 10;
    // let msHundreds = Math.floor(timer / 100) % 10;
    // let secondOnes = Math.floor(timer / 1000) % 10;
    // let secondTens = Math.floor(timer / 10000) % 10;
    let seconds = (timer % 60).toString().padStart(2, "0");
    let minutes = Math.floor(timer / 60).toString().padStart(2, "0");

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("time")
            setTimer(timer => timer - 1);
            if (timer <= 0) {
                setTimer(900);
            }
        }, 1000);

}, []);
    
return (
    <div className="timer">{minutes}:{seconds}</div>
    );
}

export default MyTimer;



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



