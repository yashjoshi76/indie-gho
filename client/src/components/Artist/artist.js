import React, { useEffect } from "react";
import { Skeleton } from "./skeleton";
import { Tracklist } from "./tracklist";
import { Indigho } from "./indigho";
import "./style.css";

export const Artist = ({ art, tracks, user }) => {
	if (art.length === 0 || user.length === 0 || tracks.length === 0) {
		return <Skeleton />;
	} else {
		// console.log(art[0].artists[0].name);
		if (tracks.length === 0 || !user) {
			return null;
		}
		const { name } = tracks[0].artists[0];
		const { display_name } = user;
		if (user.length === 0) {
			return <Skeleton />;
		}

		// console.log(name);

		return (
			<div className="spotify-artist">
				<div className="artist">
					<div className="user-details">
						{user.images.length !== 0 ? (
							<div
								className="art-image"
								style={{
									backgroundImage: `url(${
										user.images[0].url ||
										"https://iconape.com/wp-content/png_logo_vector/user-circle.png"
									})`,
									backgroundPosition: "center",
								}}
							></div>
						) : (
							<div
								className="art-image"
								style={{
									backgroundPosition: "center",
								}}
							>
								{" "}
								<img
									alt="user"
									style={{
										width: "100px",
										height: "100px",
										border: "50%",
										borderRadius: "50%",
									}}
									src="https://illustoon.com/photo/3486.png"
								/>
							</div>
						)}

						<div id="greet">
							Greetings <br />
							{display_name}!
							<br />
						</div>
					</div>

					<div className="desc-indi">
						<Indigho />
					</div>
				</div>

				<Tracklist list={tracks} name={name} />
			</div>
		);
	}
};
