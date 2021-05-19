import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

import "./style.css";

export const Playlists = (plists) => {
	const [state, setState] = useState({
		goToSlide: 0,
		offsetRadius: 2,
		showNavigation: true,
		config: config.gentle,
	});

	let slides = [
		{
			key: 1,
			content: <img src="https://picsum.photos/800/801/?random" alt="1" />,
		},
		{
			key: 2,
			content: <img src="https://picsum.photos/800/802/?random" alt="2" />,
		},
		{
			key: 3,
			content: <img src="https://picsum.photos/800/803/?random" alt="3" />,
		},
		{
			key: 4,
			content: <img src="https://picsum.photos/800/804/?random" alt="4" />,
		},
		{
			key: 5,
			content: <img src="https://picsum.photos/800/805/?random" alt="4" />,
		},
	].map((slide, index) => {
		return { ...slide, onClick: () => setState({ goToSlide: index }) };
	});

	const onChangeInput = (e) => {
		setState({
			[e.target.name]: parseInt(e.target.value, 10) || 0,
		});
	};

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
