import React, { useEffect } from "react";
import { Tracklist } from "./tracklist";
import "./style.css";

export const Artist = ({ art, tracks, user }) => {
	if (art.length === 0 || user.length === 0 || !tracks) {
		return null;
	} else {
		// console.log(art[0].artists[0].name);

		const name = "";
		const { display_name } = user;
		if (user.length === 0) {
			return null;
		}

		// console.log(name);

		return (
			<div className="spotify-artist">
				<div className="artist">
					<div>
						<img className="art-image" src={user.images[0].url} alt="song" />
					</div>

					<div className="art-name">
						<div style={{ marginBottom: "10px", fontSize: "20px" }}>
							Greetings <br />
							{display_name}!
							<br />
						</div>
						<div style={{ fontSize: "30px" }}>
							Listen to best tracks of: <br />
							{art[0].artists[0].name}
						</div>
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
