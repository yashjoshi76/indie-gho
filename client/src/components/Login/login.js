import React, { useState } from "react";
import { loginUrl } from "./spotify";
import Ghost from "../../images/login.svg";


import "./style.css";

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
