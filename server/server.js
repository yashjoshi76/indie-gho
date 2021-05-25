require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let REDIRECT_URI = process.env.REDIRECT_URI || "http://localhost:3001";
let FRONTEND_URI = process.env.FRONTEND_URI || "http://localhost:3000";
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV !== "production") {
	REDIRECT_URI = "http://localhost:3001";
	FRONTEND_URI = "http://localhost:3000";
}

console.log(process.env.REDIRECT_URI);

const port = "3001";
app.listen(PORT, () => {
	console.log("listening..", port);
});

if (
	process.env.NODE_ENV === "production" ||
	process.env.NODE_ENV === "staging"
) {
	app.use(express.static(path.join(__dirname, "client/build")));

	app.get("*", function (req, res) {
		res.sendFile(path.join(__dirname, "client/build", "index.html"));
	});
}

app.post("/refresh", (req, res) => {
	const refreshToken = req.body.refreshToken;
	console.log("token is", refreshToken);
	const spotifyApi = new SpotifyWebApi({
		redirectUri: process.env.REDIRECT_URI,
		clientId: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		refreshToken,
	});
	spotifyApi
		.refreshAccessToken()
		.then((data) => {
			console.log("refreshed!");
			console.log(data.body);
			res.json({
				accessToken: data.body.accessToken,
				expiresIn: data.body.expiresIn,
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

app.post("/login", cors(), async (req, res) => {
	const code = req.body.code;
	const spotifyApi = new SpotifyWebApi({
		redirectUri: process.env.REDIRECT_URI,
		clientId: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
	});

	spotifyApi
		.authorizationCodeGrant(code)
		.then((data) => {
			console.log(data);
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

//client flow
// app.post("/", (req, res) => {
// 	const code = req.body.code;

// 	const spotifyApi = new SpotifyWebApi({
// 		redirectUri: process.env.REDIRECT_URI,
// 		clientId: process.env.CLIENT_ID,
// 		clientSecret: process.env.CLIENT_SECRET,
// 	});
// 	spotifyApi.clientCredentialsGrant().then(
// 		function (data) {
// 			console.log(data);
// 			res.json({
// 				accessToken: data.body.access_token,
// 				refreshToken: data.body.refresh_token,
// 				expiresIn: data.body.expires_in,
// 			});
// 		},
// 		function (err) {
// 			console.log("Something went wrong when retrieving an access token", err);
// 		}
// 	);
// });
// Retrieve an access token.
