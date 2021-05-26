import React, { useEffect } from "react";
import { Tracklist } from "./tracklist";
import "./style.css";

export const Artist = ({ art, tracks }) => {
	if (!art) {
		return null;
	} else {
		// console.log(art.tracks[0]);

		const { name } = art;
		const url = "";
		// console.log(name);

		return (
			<div className="spotify-artist">
				<div className="artist">
					<div>
						<img
							className="art-image"
							src="https://i.scdn.co/image/7ef090f59f17dc031c68dc937ae472bfd233a986"
							alt="song"
						/>
					</div>

					<div className="art-name">
						Listen to best tracks of: <br />
						{name}
					</div>
					{/* <div>Suggested by DOTI</div> */}
				</div>

				<Tracklist list={tracks} name={name} />

				<div>
					{/* <div className="indie-text">Day of the Indie</div>
					<div className="indie-desc">Discover new Indie music everyday</div> */}
				</div>
			</div>
		);
	}
};
