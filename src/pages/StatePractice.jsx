import React, { useState } from "react";
import Button from '../components/Button';

const StatePractice = () => {

	const [state, setState] = useState({
		fatherName: "",
		motherName: "",
		brotherName: ""
	});

	const _onClick = () => {
		setState({
			fatherName: "Parasharam",
			motherName: "Geeta",
			brotherName: "Siddhant"
		})
	}
	
	const _onClickReset = () => {
		setState({
			fatherName: "",
			motherName: "",
			brotherName: ""
		})
	}

	return(
		<>
			<div>
				<h2>Father Name: {state.fatherName}</h2>
				<h2>Mother Name: {state.motherName}</h2>
				<h2>Brother Name: {state.brotherName}</h2>

				<Button btnName="Click Me" onClick={_onClick} />
				<Button btnName="Reset" onClick={_onClickReset} />
			</div>
		</>
	);

}

export default StatePractice;