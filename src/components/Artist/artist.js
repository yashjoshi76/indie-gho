import React, { useEffect } from "react";
import "./style.css";

export const Artist = () => {
	return (
		<div className="spotify-artist">
			<div>
				<div className="indie-text">Day of the Indie</div>
				<div className="indie-desc">Discover new Indie music everyday</div>
			</div>

			<div className="artist">
				<img
					className="art-image"
					src="https://images-na.ssl-images-amazon.com/images/I/71-Y-3usHkL._AC_SY355_.jpg"
					alt="song"
				/>
				<div className="art-name">Arctic Monkeys</div>
				<div>Play on Spotify!</div>
			</div>
		</div>
	);
};
