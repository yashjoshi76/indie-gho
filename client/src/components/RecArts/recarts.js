// Original: https://tympanus.net/codrops/2017/03/15/stack-motion-hover-effects/
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useSpring, useSprings, animated, interpolate } from "react-spring";
import "./style.css";

function Stack({ image, background, url }) {
	const [open, setOpen] = useState(false);
	const { f, r } = useSpring({ f: open ? 0 : 1, r: open ? -3 : 3 });
	const cards = useSprings(
		5,
		[0, 1, 2, 3, 4].map((i) => ({
			opacity: 0.2 + i / 5,
			z: open ? (i / 5) * 80 : 0,
		}))
	);

	const openSpotify = (url) => {
		// console.log("x", url);
		window.open(url, "_blank");
	};

	return (
		<div
			class="container"
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			{cards.map(({ z, opacity }, index) => (
				<animated.div
					onClick={(e) => openSpotify(url)}
					style={{
						opacity,
						background,
						transform: interpolate(
							[z, f.interpolate([0, 0.2, 0.6, 1], [0, index, index, 0]), r],
							(z, f, r) => `translate3d(0,0,${z}px) rotateX(${f * r}deg)`
						),
					}}
				>
					{index === 4 && (
						<div>
							<animated.img
								target="_blank"
								style={{
									transform: f.interpolate([0, 1], ["scale(0.7)", "scale(1)"]),
									height: "100%",
									width: "100%",
								}}
								src={image}
							/>
						</div>
					)}
				</animated.div>
			))}
		</div>
	);
}

export const Recarts = ({ list }) => {
	if (!list) {
		return <div>....</div>;
	}

	return (
		<div className="rec-arts">
			<div class="main">
				{list.slice(0, 9).map((x) => {
					if (x.images.length === 0) {
						return (
							<Stack
								url={x.external_urls.spotify}
								image=""
								background="#52649e"
							/>
						);
					} else
						return (
							<Stack
								url={x.external_urls.spotify}
								image={x.images[0].url}
								background="#52649e"
							/>
						);
				})}
			</div>
		</div>
	);
};
