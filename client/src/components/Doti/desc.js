import React, { Component } from "react";
import Typical from "react-typical";

const steps = [
	
	"My name is Yash Joshi.",
	1500,
	"I found the ghoul to explore Indie-Alt music everyday.",
	1500,
	"Let it haunt you too!",
	1000,
];
export const Desc = () => {
	return (
		<Typical wrapper="span" steps={steps} loop={Infinity} className={"caca"} />
	);
};
