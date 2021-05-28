import React, { useEffect } from "react";
import {Skeleton} from './skeleton';
import { Tracklist } from "./tracklist";
import "./style.css";

export const Artist = ({ art, tracks, user }) => {
	if (art.length === 0 || user.length === 0 || tracks.length === 0) {
		return <Skeleton />
	} else {
		// console.log(art[0].artists[0].name);
		if (tracks.length === 0) {
			return null;
		}
		const { name } = tracks[0].artists[0];
		const { display_name } = user;
		if (user.length === 0) {
			return <Skeleton />
		}

		// console.log(name);

		return (
			<div className="spotify-artist">
				<div className="artist">
					<div className="user-details">
						<div
							className="art-image"
							style={{
								backgroundImage: `url(${user.images[0].url})`,
								backgroundPosition: "center",
							}}
						></div>
						<div id="greet">
							Greetings <br />
							{display_name}!
							<br />
						</div>
					</div>

					<div className="desc-indi">
						Use IndiGho to discover awesome music!
					</div>
				</div>

				<Tracklist list={tracks} name={name} />
			</div>
		);
	}
};
