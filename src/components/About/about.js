import React, { useState } from "react";
import { Artist } from "../Artist/artist";
import { Navbar } from "../Navbar/navbar";
import { Playlists } from "../Playlists/playlists";
import { SimilarArts } from "../SimilarArts/similararts";
import { Footer } from "../Footer/footer";
import { Doti } from "../Doti/doti";

import "./style.css";

export const About = (artist, plists) => {
	if (!artist) {
		return <div></div>;
	} else {
		const { recom } = artist;
		console.log(plists);

		return (
			<div>
				<Navbar />
				<div className="about">
					<Artist data={recom} />
					<Playlists />
					<Doti />
					<SimilarArts />
				</div>
				<Footer />
			</div>
		);
	}
};
