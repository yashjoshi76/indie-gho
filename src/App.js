import React, { useEffect, useState } from "react";
import { Login } from "./components/Login/login";
import { useAuth } from "./components/Login/useAuth";

import { Dashboard } from "./components/Dashboard/dashboard";
import { Credentials } from "./credentials/credentials";
import "./App.css";

function App() {
	const [token, setToken] = useState();

	// useEffect(() => {
	// 	const code = new URLSearchParams(window.location.search).get("code");
	// 	setToken(code);
	// }, []);

	const code = new URLSearchParams(window.location.search).get("code");

	const accessToken = useAuth(code);
	console.log(accessToken);

	return <Dashboard code={accessToken} />;
}

export default App;
