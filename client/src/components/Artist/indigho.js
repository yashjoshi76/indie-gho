import React, { Component } from "react";
import Typical from "react-typical";

const steps = [
	"Find awesome music and Indie artists",
	1500,
	"Explore Indigho!",
	1500,
];
export const Indigho = () => {
	return (
		<Typical wrapper="span" steps={steps} loop={Infinity} className={"caca"} />
	);
};
