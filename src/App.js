import React, { useEffect, useState } from "react";
import axios from "axios";

import { About } from "./components/About/about";
import { Credentials } from "./credentials/credentials";
import "./App.css";

function App() {
	const spotify = Credentials();
	const [token, setToken] = useState("");
	const [artist, setArtists] = useState([]);
	const [plists, setPlists] = useState([]);

	const [artistSongs, setArtistSongs] = useState([]);

	// const category_url = "https://api.spotify.com/v1/browse/categories";

	const c_playlist_url =
		"https://api.spotify.com/v1/browse/categories/indie_alt/playlists"; //category playlists
	const recom_url =
		"https://api.spotify.com/v1/recommendations?limit=10&market=ES&seed_artists=0epOFNiUfyON9EYx7Tpr6V&seed_genres=indie"; //indie recommendations

	// const albums_url = `https://api.spotify.com/v1/artists/${artistId}/albums`;

	const getSongs = async (token, id) => {
		// console.log(token, id);

		let resp = await axios(`https://api.spotify.com/v1/artists/${id}/albums`, {
			method: "GET",
			headers: {
				Authorization: "Bearer " + token,
			},
		});
		let albums = resp.data;
		// console.log(albums);
		setArtistSongs(albums);
		// console.log(artistSongs);
	};

	const getRecomArtists = async (token) => {
		let recomsList = await axios(recom_url, {
			method: "GET",
			headers: {
				Authorization: "Bearer " + token,
			},
		});

		const recoms = recomsList.data;
		// console.log(resp.data.tracks[0].artists[0].id);

		getSongs(token, recoms.tracks[0].artists[0].id);
		setArtists(recoms.tracks[0]);
	};

	const getPlaylists = async (token) => {
		const playlists = await axios(c_playlist_url, {
			method: "GET",
			headers: {
				Authorization: "Bearer " + token,
			},
		});

		const playlistsData = playlists.data;
		setPlists(playlistsData.items);
	};


	useEffect(() => {
		axios("https://accounts.spotify.com/api/token", {
			headers: {
				"Content-type": "application/x-www-form-urlencoded",
				Authorization:
					"Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
			},
			data: "grant_type=client_credentials",
			method: "POST",
		}).then((tokenResponse) => {
			// console.log(tokenResponse.data.access_token);
			setToken(tokenResponse.data.access_token);
			getPlaylists(tokenResponse.data.access_token);
			getRecomArtists(tokenResponse.data.access_token);
		});
	}, [spotify.ClientId, spotify.ClientSecret]);

	return (
		<div className="App">
			<About recom={artist} list={artistSongs} />
		</div>
	);
}

export default App;
