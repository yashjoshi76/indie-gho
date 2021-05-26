import React, { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import { Recarts } from "../RecArts/recarts";
import "./style.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const Playlists = ({ list, simList }) => {
	if (list.length === 0) {
		return null;
	}

	const { items } = list;
	const { artists } = simList;

	// console.log(items);

	// let slides = items.map((obj, index) => ({
	// 	key: index,
	// 	content: (
	// 		<img
	// 			alt={index}
	// 			src={obj.images.map((x) => {
	// 				return x.url;
	// 			})}
	// 		/>
	// 	),
	// }));

	const openSpotify = (url) => {
		window.open(url, "_blank");
	};

	return (
		<div className="playlist">
			<div className="discover-text">
				Discover Playlists And Similar Artists
			</div>
			<div
				id="playlist-resp"
				style={{
					display: "flex",
					justifyContent: "space-around",
				}}
			>
				<AutoplaySlider
					cssModule={AwesomeSliderStyles}
					animation="openAnimation"
					play={true}
				>
					{items.slice(0, 15).map((x) => {
						return (
							<div
								onClick={(e) => openSpotify(x.external_urls.spotify)}
								style={{
									objectFit: "cover",
									backgroundImage: `url(${x.images[0].url})`,
									backgroundSize: "contain",
									borderRadius: "15px",
									cursor: "pointer",
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
								}}
							></div>
						);
					})}
				</AutoplaySlider>
				<Recarts list={artists} />
			</div>
		</div>
	);
};
