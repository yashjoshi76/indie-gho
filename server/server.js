require("dotenv").config();
const express = require("express");
const cors = require("cors");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3001, console.log("listening"));

app.post("/refresh", (req, res) => {
	const refreshToken = req.body.refreshToken;
	const spotifyApi = new SpotifyWebApi({
		redirectUri: process.env.REDIRECT_URI,
		clientId: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		refreshToken,
	});

	spotifyApi
		.refreshAccessToken()
		.then((data) => {
			res.json({
				accessToken: data.body.accessToken,
				expiresIn: data.body.expiresIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(400);
		});
});

app.get("/log", cors(), (req, res) => {
	var scopes = ["user-read-private", "user-read-email"],
		redirectUri = "http://localhost:3000",
		clientId = process.env.CLIENT_ID;
	state = process.env.CLIENT_SECRET;

	// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
	var spotifyApi = new SpotifyWebApi({
		redirectUri: redirectUri,
		clientId: clientId,
	});

	// Create the authorization URL
	var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

	// https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
	console.log(authorizeURL);
});

app.post("/login", cors(), (req, res) => {
	const code = req.body.code;
	const spotifyApi = new SpotifyWebApi({
		redirectUri: process.env.REDIRECT_URI,
		clientId: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
	});

	spotifyApi
		.authorizationCodeGrant(code)
		.then((data) => {
			res.json({
				accessToken: data.body.access_token,
				refreshToken: data.body.refresh_token,
				expiresIn: data.body.expires_in,
			});
		})
		.catch((err) => {
			res.sendStatus(400);
		});
});
