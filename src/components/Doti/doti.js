import React, { useEffect } from "react";
import DIcon from "../../images/doti.svg";
import "./style.css";

export const Doti = () => {
	return (
		<div className="about-doti">
			<div className="doti-all-about">
				<div>
					<div className="doti-heading">
						<span className="about-doti-text">
							Day of The Indie:
							<br />
							DOTI
						</span>
						<span id="doti-name">Why doti exists</span>
					</div>
				</div>
				<div className="intro-text">
					I believe if you want to brew good coffee, there must be good music
					around. Personally, I'm fond of indie-alt and house music and as a
					loyal spotify premium user(...the ads won); I wanted an 'Alternative'
					recommendation platform. Hence, I started DOTI! <br />
					<span style={{ fontSize: "10px", fontWeight: "bold" }}>
						*Alternative refers to the genre's distinction from mainstream or
						commercial rock or pop music.
					</span>
				</div>
			</div>
			<div className="doti-img-div">
				<img className="doti-img" src={DIcon} alt="indie rock" />
			</div>
			<div className="doti-intro"></div>
		</div>
	);
};
