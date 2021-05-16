import React from "react";
import { Navbar } from "../Navbar/navbar";
import { About } from "../About/about";
import { Footer } from "../Footer/footer";

export const Home = () => {
	return (
		<div>
			<Navbar />
			<About />
			<Footer />
		</div>
	);
};
