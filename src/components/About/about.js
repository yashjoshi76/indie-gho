import React, { useState } from "react";
import { Artist } from "../Artist/artist";
import { Navbar } from "../Navbar/navbar";
import { Playlists } from "../Playlists/playlists";
import { SimilarArts } from "../SimilarArts/similararts";
import { Footer } from "../Footer/footer";
import { Doti } from "../Doti/doti";

import "./style.css";

export const About = (data) => {
	if (!data) {
		return <div></div>;
	} else {
		const { list } = data;
		console.log(list);

		return (
			<div>
				<Navbar />
				<div className="about">
					{/* <Artist art={recom} /> */}
					<Playlists list={list} /> 
					<Doti />
					<SimilarArts />
				</div>
				<Footer />
			</div>
		);
	}
};
