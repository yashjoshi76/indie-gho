import React, { useEffect, useState } from "react";
import { Login } from "./components/Login/login";
import { getTokenFromUrl } from "./components/Login/spotify";
import { Dashboard } from "./components/Dashboard/dashboard";

import "./App.css";

function App() {
	const [token, setToken] = useState();

	useEffect(() => {
		const hash = getTokenFromUrl();
		// window.location.hash = "";
		const _token = hash.access_token;

		if (_token) {
			setToken(_token);
			window.sessionStorage.setItem("x", _token);
			window.sessionStorage.removeItem("mytime");
		}

		console.log("token", token);
	}, []);

	return window.sessionStorage.getItem("x") ? (
		<Dashboard code={token} />
	) : (
		<Login />
	);
}

export default App;
