import React, { useEffect } from "react";
import DIcon from "../../images/doti.svg";

import { Desc } from "./desc";
import "./style.css";

export const Doti = () => {
	return (
		<div className="about-doti">
			<div className="doti-all-about">
				<div>
					<div className="doti-heading">
						<span className="about-doti-text">
							Indie Ghoul
							<br />
						</span>
						<span id="doti-name">Why IndiGho Haunts</span>
					</div>
				</div>
				<div className="intro-text">
					<Desc />
				</div>
			</div>
			<div className="doti-img-div">
				<img className="doti-img" src={DIcon} alt="indie rock" />
			</div>
			<div className="doti-intro"></div>
		</div>
	);
};
