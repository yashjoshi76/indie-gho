import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";

//components
import { Artist } from "../Artist/artist";
import { Navbar } from "../Navbar/navbar";
import { Playlists } from "../Playlists/playlists";
import { InstaList } from "../Instagram/instalist";
import { Footer } from "../Footer/footer";
import { Doti } from "../Doti/doti";

import { Recoms } from "./recoms/recoms";

//stylesheet
import "./style.css";

//clientid
const spotifyApi = new SpotifyWebApi({
	clientId: "b80dd597528a4b68a17f948cfff4a1aa",
});

const randomSuggest = (items) => {
	// const random = Math.floor(Math.random() * items.length);
	const random = Math.floor(Math.random() * items.length);
	return random;
};

export const Dashboard = ({ code, user, plists }) => {
	const [artists, setArtists] = useState([]);

	const [topTracks, setTopTracks] = useState([]);

	const [similarArts, setSimilarArts] = useState([]);

	//accesstokenrefresh
	useEffect(() => {
		if (!code) return;
		spotifyApi.setAccessToken(code);
	}, [code]);

	//recommendations
	useEffect(() => {
		const rand = randomSuggest(Recoms.tracks);
		// console.log("recs", data.body.tracks[rand].artists[rand].id);
		setArtists(Recoms.tracks);

		spotifyApi.getArtistTopTracks(Recoms.tracks[rand].artists[0].id, "GB").then(
			function (data) {
				setTopTracks(data.body.tracks);
			},
			function (err) {
				// console.log("Something went wrong!", err);
			}
		);

		spotifyApi.getArtistRelatedArtists(Recoms.tracks[rand].artists[0].id).then(
			function (data) {
				// console.log("similar", data.body);
				setSimilarArts(data.body);
			},
			function (err) {
				console.log(err);
			}
		);
	}, [code]);

	return !code ? (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			Already logged in!
		</div>
	) : (
		<div>
			<Navbar />
			<div className="about">
				<Artist art={artists} tracks={topTracks} user={user} />
				<Playlists list={plists} simList={similarArts} />
				<Doti />
				<InstaList />
			</div>
			<Footer />
		</div>
	);
};
