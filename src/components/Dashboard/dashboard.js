import React, { useState, useEffect } from "react";
import axios from "axios";
import SpotifyWebApi from "spotify-web-api-node";

//components
import { Artist } from "../Artist/artist";
import { Navbar } from "../Navbar/navbar";
import { Playlists } from "../Playlists/playlists";
import { SimilarArts } from "../SimilarArts/similararts";
import { Footer } from "../Footer/footer";
import { Doti } from "../Doti/doti";
import { Login } from "../Login/login";
import { useAuth } from "../Login/useAuth";

//stylesheet
import "./style.css";

//clientid
const spotifyApi = new SpotifyWebApi({
	clientId: "509490d6f8d64997ad8e2eb63fe621c8",
});

export const Dashboard = ({ code }) => {
	const [artists, setArtists] = useState([]);
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
		spotifyApi
			.getRecommendations({
				min_energy: 0.4,
				seed_artists: ["5INjqkS1o8h1imAzPqGZBb"],
				min_popularity: 50,
			})
			.then(
				function (data) {
					let recommendations = data.body;
					setArtists(recommendations);
					// setTopArtist(recommendations.tracks[0].artists[0].id);

					spotifyApi
						.getArtistTopTracks(
							`${recommendations.tracks[0].artists[0].id}`,
							"GB"
						)
						.then(
							function (data) {
								setTopArtist(data.body.tracks);
							},
							function (err) {
								console.log("Something went wrong!", err);
							}
						);
					spotifyApi
						.getArtistRelatedArtists(
							`${recommendations.tracks[0].artists[0].id}`
						)
						.then(
							function (data) {
								// console.log("similar", data.body);
								setSimilarArts(data.body);
							},
							function (err) {
								console.log(err);
							}
						);

					console.log(recommendations);
				},
				function (err) {
					console.log("Something went wrong!", err);
				}
			);
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
					console.log(data.body);
					setPlists(data.body.playlists);
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
				{!artists ? (
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						sdnsjdns
					</div>
				) : (
					<Artist art={artists} tracks={topArtist} />
				)}

				<Playlists list={plists} simList={similarArts} />
				<Doti />
				{/* <SimilarArts /> */}
			</div>
			<Footer />
		</div>
	);
};
