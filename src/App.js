//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import UpperBoard from "./UpperBoard";
// import MyTimer from "./Timer.js";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lions, setLions] = useState(0);
  const [tigers, setTigers] = useState(0);

  const teamHandler = (set, value, inc) => {
    return () => set(value + inc);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <UpperBoard lions={lions} tigers={tigers} />
        <BottomRow />
      </section>
      <section className="buttons">
        {/* <HomeButtons /> */}
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            onClick={teamHandler(setLions, lions, 7)}
            className="homeButtons__touchdown"
          >
            Home Touchdown
          </button>
          {/* <button onClick={() => { setLions(lions + 7);}} className="homeButtons__touchdown">Home Touchdown</button> */}
          <button
            onClick={teamHandler(setLions, lions, 3)}
            className="homeButtons__fieldGoal"
          >
            Home Field Goal
          </button>
          {/* <button
            onClick={() => {
              setLions(lions + 3);
            }}
            className="homeButtons__fieldGoal"
          >
            Home Field Goal
          </button> */}
        </div>
        <div className="awayButtons">
          <button
            onClick={teamHandler(setTigers, tigers, 7)}
            className="awayButtons__touchdown"
          >
            Away Touchdown
          </button> 
          {/* <button
            onClick={() => {
              setTigers(tigers + 7);
            }}
            className="awayButtons__touchdown"
          >
            Away Touchdown
          </button> */}
          <button
            onClick={teamHandler(setTigers, tigers, 3)}
            className="awayButtons__fieldGoal"
          >
            Away Field Goal
          </button>
          {/* <button
            onClick={() => {
              setTigers(tigers + 3);
            }}
            className="awayButtons__fieldGoal"
          >
            Away Field Goal
          </button> */}
        </div>
      </section>
    </div>
  );
}

export default App;
