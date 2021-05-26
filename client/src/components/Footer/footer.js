import React from "react";
import "./style.css";

export const Footer = () => {
	function handleClick() {
		window.location.reload();
	}

	return (
		<nav className="footer">
			<div className="footer-text">
				<div>Creatively yours, Yash J</div>
			</div>
		</nav>
	);
};
