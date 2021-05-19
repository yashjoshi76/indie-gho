import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

import "./style.css";

export const Playlists = ({ list }) => {
	const [state, setState] = useState({
		goToSlide: 0,
		offsetRadius: 2,
		showNavigation: true,
		config: config.gentle,
	});

	// console.log(list);

	let slides = list.map((obj, index) => ({
	key: index,
	content: (
		<img
			alt={index}
			src={obj.images.map((x) => {
				return x.url;
			})}
		/>
	),
})).map((slide, index) => {
		return { ...slide, onClick: () => setState({ goToSlide: index }) };
	});

	let xDown = null;
	let yDown = null;

	const getTouches = (evt) => {
		return (
			evt.touches || evt.originalEvent.touches // browser API
		); // jQuery
	};

	const handleTouchStart = (evt) => {
		const firstTouch = getTouches(evt)[0];
		xDown = firstTouch.clientX;
		yDown = firstTouch.clientY;
	};

	const handleTouchMove = (evt) => {
		if (!xDown || !yDown) {
			return;
		}

		let xUp = evt.touches[0].clientX;
		let yUp = evt.touches[0].clientY;

		let xDiff = xDown - xUp;
		let yDiff = yDown - yUp;

		if (Math.abs(xDiff) > Math.abs(yDiff)) {
			/*most significant*/
			if (xDiff > 0) {
				/* left swipe */
				setState({ goToSlide: state.goToSlide + 1 });
			} else {
				/* right swipe */
				setState({ goToSlide: state.goToSlide - 1 });
			}
		} else {
			if (yDiff > 0) {
				/* up swipe */
			} else {
				/* down swipe */
			}
		}
		/* reset values */
		xDown = null;
		yDown = null;
	};

	return (
		<div className="playlist">
			<div className="discover-text">Discover Playlists</div>
			<div
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				className="playlist-carousel"
			>
				<Carousel
					slides={slides}
					goToSlide={state.goToSlide}
					offsetRadius={state.offsetRadius}
					animationConfig={state.config}
				/>
			</div>
		</div>
	);
};
