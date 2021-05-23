import React, { useEffect } from "react";
import { Tracklist } from "./tracklist";
import "./style.css";

export const Artist = ({ art, tracks }) => {
	if (art.length === 0) {
		return null;
	} else {
		// console.log(art.tracks[0]);

		const { name } = art.tracks[0].artists[0];
		const { url } = art.tracks[0].album.images[0];
		// console.log(name);

		return (
			<div className="spotify-artist">
				<div className="artist">
					<div style={{ padding: "0px 0px 0px 20px", width: "60%" }}>
						<img className="art-image" src={url} alt="song" />
					</div>

					<div className="artist-details">
						<div className="art-name">
							Check out best tracks of: <br />
							{name}
						</div>
						{/* <div>Suggested by DOTI</div> */}
					</div>
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
