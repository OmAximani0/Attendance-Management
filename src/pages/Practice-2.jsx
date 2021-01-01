import React, { useState } from "react";
import Cart from "../components/Cart";
import Card from "../components/CardUI";

const Practice2 = () => {

	const [state, setState] = useState(0)

	const _onClick = () => {
		setState(state + 1)
	}

	const _onReset = () => {
		setState(0)
	}

  return (
    <>
      <div className="cart-cont">
        <Cart value={state} />
		<button className="btn btn-success" onClick={_onReset}>Remove All</button>		
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
			  <Card onclick={_onClick} />
		  </div>
        </div>
      </div>
    </>
  );
};

export default Practice2;
