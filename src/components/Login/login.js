import React from "react";

const LOGIN_URI =
	process.env.NODE_ENV !== "production"
		? "http://localhost:8888/login"
		: "https://spotify-profile.herokuapp.com/login";

const url =
	"https://accounts.spotify.com/authorize?client_id=509490d6f8d64997ad8e2eb63fe621c8&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export const Login = () => {
	return (
		<div>
			<a className="btn btn-success btn-lg" href={LOGIN_URI}>
				Login With Spotify
			</a>
		</div>
	);
};
