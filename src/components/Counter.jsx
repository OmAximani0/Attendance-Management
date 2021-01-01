import React, { useState } from "react";

export default function funcComp() {

	const [state, setState] = useState({
		count: 0
	});

	const [result, setResult] = useState(0)

	const [nums, setNums] = useState({
		num1 : 0,
		num2 : 0,
		num3 : 0,
		num4 : 0
	})

	const _onClick_Increase = () => {
		setState({ count: (state.count + 1)});
	}
	
	const _onClick_Decrease = () => {
		setState({ count: (state.count - 1)});
	}

	const _resetClick = () => {
		setState({ count: 0 });
	}

	const _enterClick = () => {
		if(nums.num3==0){
			setNums({
				num3: (nums.num3 + 1),
				num1: (state.count)
			})
			console.log(nums);
		}
		else{
			setNums({
				num2: (state.count),
			})

			setNums({
				num4: (state.count)
			})
			console.log("Double");
		}
	}

	return (
		<div>
			<h1>Count: {state.count}</h1>
			<button className="btn btn-primary" onClick={_onClick_Increase}>Increase</button>
			<button className="btn btn-secondary" onClick={_resetClick}>Reset</button>
			<button className="btn btn-primary" onClick={_onClick_Decrease}>Decrease</button><br/>
			<button className="btn btn-success" onClick={_enterClick}>Enter</button>
			<br/>
			<br/>
			<h2>Result: {result}</h2>
		</div>
	);
}
