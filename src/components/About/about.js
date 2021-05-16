import React from "react";
import { Artist } from "../Artist/artist";
import { Playlists } from "../Playlists/playlists";
import { SimilarArts } from "../SimilarArts/similararts";
import { Doti } from "../Doti/doti";

import "./style.css";

export const About = () => {
	return (
		<div className="about">
			<Artist />
			<Playlists />
			<Doti />
			<SimilarArts />
		</div>
	);
};
