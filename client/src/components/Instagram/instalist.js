import React, { useState } from "react";

import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import Groove from "../../images/groove.svg";
import "./style.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const InstaList = () => {
	const frames = [
		"https:///www.instagram.com/p/CCP8ac6FlV4/embed",
		"https://www.instagram.com/p/CDWeOBIF7mM/embed",

		"https://www.instagram.com/p/CCtkEfKFHSl/embed",

		"https://www.instagram.com/p/CB3A28bl_4y/embed",

		"https://www.instagram.com/p/CBTSBNsFnXS/embed",
	];

	return (
		<div className="sim-layout">
			<div className="similar-arts">
				<div className="similar-arts-text">Find Indie on Instagram</div>

				<AutoplaySlider
					style={{
						width: "100%",
						height: "300px",
						margin: "0px 0px 30px 0px;",
					}}
					cssModule={AwesomeSliderStyles}
					animation="openAnimation"
					play={true}
				>
					{frames.map((x) => {
						return (
							<div>
								<iframe
									title="u"
									width="400"
									height="400"
									src={x}
									frameborder="0"
								/>
							</div>
						);
					})}
				</AutoplaySlider>
			</div>

			<div>
				<img alt="groove" className="groove-img" src={Groove} />
			</div>
		</div>
	);
};
