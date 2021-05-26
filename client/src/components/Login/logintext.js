import React, { Component } from "react";
import Typical from "react-typical";

const steps = [
	"DOTI is an acronym for Day of The Indie 👻 ",
	2000,
	"My name is Yash Joshi",
	1000,
	"And I found the ghoul to explore Indie-Alt music",
	1000,
];
export const LoginText = () => {
	return (
		<div
			style={{
				marginTop: "30px",
				fontSize: "40px",
				width: "500px",
				height: "500px",
			}}
		>
			<Typical
				wrapper="span"
				steps={steps}
				loop={Infinity}
				className={"caca"}
			/>
		</div>
	);
};
