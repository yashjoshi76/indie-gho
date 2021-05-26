import React, { useState } from "react";
import { loginUrl } from "./spotify";
import Ghost from "../../images/login.svg";
import FluidAnimation from "react-fluid-animation";
import { LoginText } from "./logintext";
import "./style.css";

const defaultConfig = {
	textureDownsample: 1,
	densityDissipation: 0.98,
	velocityDissipation: 0.99,
	pressureDissipation: 0.8,
	pressureIterations: 25,
	curl: 30,
	splatRadius: 0.005,
};

export const Login = () => {
	return (
		<div className="login">
			<div className="login-content">
				<img className="login-img" src={Ghost} alt="Spotify logo" />
			</div>
			<div>
				<div className="doti">INDIGHO</div>
				<div>
					<a className="login-a" href={loginUrl}>
						LOGIN WITH SPOTIFY
					</a>{" "}
				</div>
			</div>
		</div>
	);
};
