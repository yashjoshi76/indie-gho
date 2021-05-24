import React, { useEffect, useState } from "react";
import { Login } from "./components/Login/login";
import axios from "axios";
import { useAuth } from "./components/Login/useAuth";

import { Dashboard } from "./components/Dashboard/dashboard";
import { Credentials } from "./credentials/credentials";
import "./App.css";

const clientId = "509490d6f8d64997ad8e2eb63fe621c8";
const clientSecret = "b461cbd67ed64b5699edb74b356f2b9a";

function App() {
	const [token, setToken] = useState("");

	const accessToken = useAuth();
	console.log(accessToken)

	return accessToken ? <Dashboard code={accessToken} /> : <div>...</div>;
}

export default App;
