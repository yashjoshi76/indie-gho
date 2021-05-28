import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";

//components
import { Artist } from "../Artist/artist";
import { Navbar } from "../Navbar/navbar";
import { Playlists } from "../Playlists/playlists";
import { InstaList } from "../Instagram/instalist";
import { Footer } from "../Footer/footer";
import { Doti } from "../Doti/doti";

//stylesheet
import "./style.css";

//clientid
const spotifyApi = new SpotifyWebApi({
	clientId: "509490d6f8d64997ad8e2eb63fe621c8",
});

const randomSuggest = (items) => {
	// const random = Math.floor(Math.random() * items.length);
	const random = Math.floor(Math.random() * items.length);
	return random;
};

export const Dashboard = ({ code }) => {
	const [artists, setArtists] = useState([]);
	const [user, setUser] = useState([]);
	const [topTracks, setTopTracks] = useState([]);
	const [plists, setPlists] = useState([]);
	const [similarArts, setSimilarArts] = useState([]);

	//accesstokenrefresh
	useEffect(() => {
		if (!code) return;
		spotifyApi.setAccessToken(code);
	}, [code]);

	//recommendations
	useEffect(() => {
		spotifyApi
			.getRecommendations({
				min_energy: 0.4,
				seed_artists: [
					"4Z8W4fKeB5YxbusRsdQVPb", //radiohead
					"5NXHXK6hOCotCF8lvGM1I0", //porcupinetree
					"37i9dQZF1DX1A0PcRHdJVf", //arcticmonkeys
					"6ft7JnxMyZhp7N52qzHymY", //vansire
					"1QAJqy2dA3ihHBFIHRphZj", //cigsaftersex
				],
			})
			.then(
				function (data) {
					const rand = randomSuggest(data.body.tracks);
					// console.log("recs", data.body.tracks[rand].artists[rand].id);
					setArtists(data.body.tracks);

					spotifyApi
						.getArtistTopTracks(data.body.tracks[rand].artists[0].id, "GB")
						.then(
							function (data) {
								setTopTracks(data.body.tracks);
							},
							function (err) {
								// console.log("Something went wrong!", err);
							}
						);

					spotifyApi
						.getArtistRelatedArtists(data.body.tracks[rand].artists[0].id)
						.then(
							function (data) {
								// console.log("similar", data.body);
								setSimilarArts(data.body);
							},
							function (err) {
								console.log(err);
							}
						);
				},
				function (err) {
					// console.log("Something went wrong!", err);
				}
			);

		//popular playlists in ireland
		spotifyApi
			.getPlaylistsForCategory("indie_alt", {
				country: "IE",
				limit: 20,
				offset: 0,
			})
			.then(
				function (data) {
					// console.log(data.body);
					setPlists(data.body.playlists);
				},
				function (err) {
					console.log("Something went wrong!", err);
				}
			);
		spotifyApi.getMe().then(
			function (data) {
				// console.log("Some information about the authenticated user", data.body);
				setUser(data.body);
			},
			function (err) {
				console.log("Something went wrong!", err);
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
		<div className="dashboard">
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
