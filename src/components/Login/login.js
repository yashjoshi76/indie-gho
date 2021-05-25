import React from "react";

const url =
	"https://accounts.spotify.com/authorize?client_id=509490d6f8d64997ad8e2eb63fe621c8&response_type=code&redirect_uri=https://doti-ghoul.herokuapp.com&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export const Login = () => {
	return (
		<div>
			<a className="btn btn-success btn-lg" href={url}>
				Login With Spotify
			</a>
		</div>
	);
};
