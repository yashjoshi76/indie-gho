import React, { useEffect, useState } from "react";
import { Login } from "./components/Login/login";
import { useAuth } from "./components/Login/useAuth";

import { Dashboard } from "./components/Dashboard/dashboard";
import { Credentials } from "./credentials/credentials";
import "./App.css";

function App() {
	const code = new URLSearchParams(window.location.search).get("code");
	const accessToken = useAuth(code);

	localStorage.setItem("token", accessToken);

	return accessToken? (
		<Dashboard code={accessToken} />
	) : (
		<Login />
	);
}

export default App;
