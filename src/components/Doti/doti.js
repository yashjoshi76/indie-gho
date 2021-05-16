import React, { useEffect } from "react";
import DIcon from "../../images/doti.svg";
import "./style.css";

export const Doti = () => {
	return (
		<div className="about-doti">
			<div className="doti-img-div">
				<img className="doti-img" src={DIcon} alt="indie rock" />
			</div>
			<div className="doti-all-about">
				<div>
					<div className="doti-heading">
						<span className="about-doti-text">THE DOTI GHOUL</span>
						<span>Day of The Indie</span>
					</div>
				</div>
				<div className="intro-text">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged.
				</div>
			</div>
			<div className="doti-intro"></div>
		</div>
	);
};
