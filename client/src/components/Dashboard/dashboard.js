import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";

//components
import { Artist } from "../Artist/artist";
import { Navbar } from "../Navbar/navbar";
import { Playlists } from "../Playlists/playlists";
import { SimilarArts } from "../SimilarArts/similararts";
import { Footer } from "../Footer/footer";
import { Doti } from "../Doti/doti";

//stylesheet
import "./style.css";

//clientid
const spotifyApi = new SpotifyWebApi({
	clientId: "509490d6f8d64997ad8e2eb63fe621c8",
});

const getRandomArtist = () => {
	const list = [
		"2Z7UcsdweVlRbAk5wH5fsf",
		"4X42BfuhWCAZ2swiVze9O0",
		"4lrBMUSk8PiNnCEZfsmPAk",
		"5INjqkS1o8h1imAzPqGZBb",
		"5NXHXK6hOCotCF8lvGM1I0",
		"37i9dQZF1DX1A0PcRHdJVf",
		"1uAQR5uku7pQGEiaG7VqiE",
	];

	const random = Math.floor(Math.random() * list.length);
	return list[random];
};

export const Dashboard = ({ code }) => {
	const [artists, setArtists] = useState([]);
	const [tracks, setTracks] = useState([]);
	const [topArtist, setTopArtist] = useState([]);
	const [plists, setPlists] = useState([]);
	const [similarArts, setSimilarArts] = useState([]);

	//accesstokenrefresh
	useEffect(() => {
		if (!code) return;
		spotifyApi.setAccessToken(code);
	}, [code]);

	//recommendations
	useEffect(() => {
		spotifyApi.getArtistRelatedArtists(getRandomArtist()).then(
			function (data) {
				// console.log("similar", data.body);
				setSimilarArts(data.body);

				spotifyApi
					.searchTracks(
						`artist: [${data.body.artists[0].name}, ${data.body.artists[1].name}, ${data.body.artists[2].name}]`
					)
					.then(
						function (data) {
							console.log("data", data);
						},
						function (err) {
							console.log("Something went wrong!", err);
						}
					);
			},
			function (err) {
				console.log(err);
			}
		);
		spotifyApi
			.getRecommendations({
				min_energy: 0.4,
				seed_artists: ["5NXHXK6hOCotCF8lvGM1I0"],
			})
			.then(
				function (data) {
					console.log("recs", data.body.tracks[0].artists[0].id);
					spotifyApi
						.getArtistTopTracks(data.body.tracks[0].artists[0].id, "GB")
						.then(
							function (data) {
								setTopArtist(data.body.tracks);
							},
							function (err) {
								// console.log("Something went wrong!", err);
							}
						);
				},
				function (err) {
					// console.log("Something went wrong!", err);
				}
			);
		// setTopArtist(recommendations.tracks[0].artists[0].id);

		//userdetails

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
				console.log("Some information about the authenticated user", data.body);
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
			sdsdns
		</div>
	) : (
		<div>
			<Navbar />
			<div className="about">
				<Artist art={similarArts} tracks={topArtist} />
				<Playlists list={plists} simList={similarArts} />
				<Doti />
				<SimilarArts />
			</div>
			<Footer />
		</div>
	);
};
