import React from "react";
import { Redirect } from "react-router-dom";

let isValid = localStorage.getItem("LOGGED_IN")
const StudentDashboard = () => {
	if (isValid == 'false') {
		return (<Redirect to="/" />)
	}
	else {
		return(
			<>
			<center>
				<h1>Student Dashboard</h1>
			</center>
			</>
		);
	}
};

export default StudentDashboard;
