import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { Login } from "./components/Login/login";
import { getTokenFromUrl } from "./components/Login/spotify";
import { Dashboard } from "./components/Dashboard/dashboard";

import { Playlist } from "./components/Dashboard/playlist";

import "./App.css";

const spotifyApi = new SpotifyWebApi({
	clientId: "b80dd597528a4b68a17f948cfff4a1aa",
});

function App() {
	const [token, setToken] = useState();
	const [user, setUser] = useState([]);

	const plists = Playlist.playlists;

	useEffect(() => {
		const hash = getTokenFromUrl();

		// window.location.hash = "";
		const _token = hash.access_token;

		if (_token) {
			setToken(_token);

			if (!token) return;
			spotifyApi.setAccessToken(token);

			spotifyApi.getMe().then(
				function (data) {
					// console.log("Some information about the authenticated user", data.body);
					setUser(data.body);
				},
				function (err) {
					console.log("Something went wrong!", err);
				}
			);
		}
		window.sessionStorage.setItem("auth", _token);

		// console.log("token", token);
	}, [token]);

	return window.sessionStorage.getItem("auth") ? (
		<Dashboard code={token} user={user} plists={plists} />
	) : (
		<Login />
	);
}

export default App;
