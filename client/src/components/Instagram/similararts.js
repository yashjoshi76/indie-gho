import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";


import "./style.css";

export const SimilarArts = (artists) => {
	const [state, setState] = useState({
		goToSlide: 0,
		offsetRadius: 2,
		showNavigation: true,
		config: config.gentle,
	});

	let slides = [
		{
			key: 1,
			content: (
				<iframe
					title="s"
					width="320"
					height="440"
					src="https://www.instagram.com/p/CDWeOBIF7mM/embed"
					frameborder="0"
				/>
			),
		},
		{
			key: 2,
			content: (
				<iframe
					title="a"
					width="320"
					height="440"
					src="https://www.instagram.com/p/CCtkEfKFHSl/embed"
					frameborder="0"
				/>
			),
		},
		{
			key: 3,
			content: (
				<iframe
					title="n"
					width="320"
					height="440"
					src="https://https://www.instagram.com/p/CCP8ac6FlV4/embed"
					frameborder="0"
				/>
			),
		},
		{
			key: 4,
			content: (
				<iframe
					title="y"
					width="320"
					height="440"
					src="https://www.instagram.com/p/CB3A28bl_4y/embed"
					frameborder="0"
				/>
			),
		},
		{
			key: 5,
			content: (
				<iframe
					title="u"
					width="320"
					height="440"
					src="https://www.instagram.com/p/CBTSBNsFnXS/embed"
					frameborder="0"
				/>
			),
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
		<div className="sim-layout">
			<div className="similar-arts">
				<div className="similar-arts-text">Find Indie on Instagram</div>
				<div
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					className="similar-arts-carousel"
				>
					<Carousel
						slides={slides}
						goToSlide={state.goToSlide}
						offsetRadius={state.offsetRadius}
						animationConfig={state.config}
					/>
				</div>
			</div>
			
		</div>
	);
};
