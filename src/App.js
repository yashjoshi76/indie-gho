import React, { useEffect, useState } from "react";
import { Login } from "./components/Login/login";
import axios from "axios";
import { useAuth } from "./components/Login/useAuth";

import { Dashboard } from "./components/Dashboard/dashboard";
import { Credentials } from "./credentials/credentials";
import "./App.css";

const getHashParams = () => {
	const hashParams = {};
	let e;
	const r = /([^&;=]+)=?([^&;]*)/g;
	const q = window.location.hash.substring(1);
	while ((e = r.exec(q))) {
		hashParams[e[1]] = decodeURIComponent(e[2]);
	}
	return hashParams;
};

function App() {
	const [token, setToken] = useState("");

	const { error, access_token, refresh_token } = getHashParams();

	const code = new URLSearchParams(window.location.search).get("code");

	return access_token ? <Dashboard code={access_token} /> : <Login />;
}

export default App;
