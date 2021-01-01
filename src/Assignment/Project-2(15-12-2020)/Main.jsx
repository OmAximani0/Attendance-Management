import React, { useState } from "react";

import Header from "./components/Header";
import "./Main.css"

const Main = () => {

	const [state, setState] = useState({
		score: null,
		message: "Click 'Roll Dice' to get the score",
		signal: false
	})

	const _onRoll = () => {
		let randNum = Math.floor(Math.random() * 6)+1;
		setState({
			...state,
			score: randNum,
			signal: true
		})
	};

	const _onReset = () => {
		setState({
			...state,
			score: null,
			signal: false
		});
	};

  return (
    <>
      <div>
        <center>
          <div className="mt-4">
            <Header />
          </div>
		  <hr/>
		  <div>
			  {
				state.signal ? <h2 className="text-secondary">Your Score: {state.score}</h2> : <h2 className="text-success">{state.message}</h2>
			  }
			  <hr/>
			  <div>
				  <button onClick={_onReset} className="btn btn-lg btn-secondary m-3">Reset</button>
				  <button onClick={_onRoll} className="btn btn-lg btn-success m-3">Roll Dice</button>
			  </div>
		  </div>
        </center>
      </div>
    </>
  );
};

export default Main;
