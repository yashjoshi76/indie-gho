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
	// console.log(code);

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
					"5INjqkS1o8h1imAzPqGZBb",
					"0epOFNiUfyON9EYx7Tpr6V",
					"7Ln80lUS6He07XvHI8qqHH",
					"2Z7UcsdweVlRbAk5wH5fsf",
				],
				min_popularity: 50,
			})
			.then(
				function (data) {
					let recommendations = data.body;
					console.log(recommendations);
				},
				function (err) {
					console.log("Something went wrong!", err);
				}
			);
		//userdetails
		spotifyApi.getMe().then(
			function (data) {
				console.log("Some information about the authenticated user", data.body);
			},
			function (err) {
				console.log("Something went wrong!", err);
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
					console.log(data.body);
				},
				function (err) {
					console.log("Something went wrong!", err);
				}
			);
	}, [code]);

	return (
		<div>
			<Navbar />
			<div className="about">
				{/* <Artist art={recom} /> */}
				{/* <Playlists list={list} />  */}
				<Doti />
				<SimilarArts />
			</div>
			<Footer />
		</div>
	);
};
