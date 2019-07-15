import React, { useState } from "react";


function HomeButtons(props) {
    console.log(props)
    return (
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
    );
}




export default HomeButtons;
