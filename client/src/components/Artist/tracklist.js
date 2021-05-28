import React, { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import "./style.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const Tracklist = ({ list, name }) => {
	if (list.length === 0) {
		return null;
	}

	const openSpotify = (url) => {
		window.open(url, "_blank");
	};

	return (
		<div className="tracklist">
			<div id="top-tracks">
				Tracks of: <br />
				<div style={{ textTransform: "uppercase" }}>{name}</div>
			</div>
			<AutoplaySlider
				style={{ width: "250px", height: "250px", margin: "0px 0px 30px 0px;" }}
				cssModule={AwesomeSliderStyles}
				animation="openAnimation"
				play={false}
			>
				{list.slice(0, 6).map((x) => {
					return (
						<div
							onClick={(e) => openSpotify(x.external_urls.spotify)}
							style={{
								objectFit: "cover",
								backgroundImage: `url(${x.album.images[0].url})`,
								backgroundSize: "contain",
								borderRadius: "15px",
								cursor: "pointer",
								backgroundPosition: "center",
								backgroundRepeat: "no-repeat",
							}}
						>
							<div
								style={{
									color: "white",
									height: "200px",
									borderRadius: "50%",
									fontSize: "xx-large",
									textTransform: "uppercase",
									fontWeight: "bold",
									backgroundColor: "#0000001a",
									width: "200px",
									textAlign: "center",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								{x.name}{" "}
							</div>
						</div>
					);
				})}
			</AutoplaySlider>
		</div>
	);
};
