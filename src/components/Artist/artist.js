import React, { useEffect } from "react";
import "./style.css";

export const Artist = ({ data }) => {
	if (data.length === 0) {
		return <div>loading...</div>;
	} else {
		// console.log(data.album.artists[0].name);
		const img = data.album.images[0].url;

		const { name } = data.album.artists[0];

		return (
			<div className="spotify-artist">
				<div>
					<div className="indie-text">Day of the Indie</div>
					<div className="indie-desc">Discover new Indie music everyday</div>
				</div>

				<div className="artist">
					<img className="art-image" src={img} alt="song" />
					<div className="art-name">{name}</div>
					<div>Play on Spotify!</div>
				</div>
			</div>
		);
	}
};


// const slides = list.map((obj, index) => ({
// 	key: index,
// 	content: (
// 		<img
// 			alt={obj.id}
// 			src={obj.images.map((x) => {
// 				return x.url;
// 			})}
// 		/>
// 	),
// }));
