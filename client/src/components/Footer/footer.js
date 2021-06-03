import React from "react";
import Insta from "../../images/social/insta.png";
import Lin from "../../images/social/lin.png";
import "./style.css";

export const Footer = () => {
	function handleClick() {
		window.location.reload();
	}

	const openLin = (url) => {
		window.open(url);
	};

	return (
		<nav className="footer">
			<div className="footer-text">
				<div>Creatively yours, Yash J</div>
			</div>
			<div>
				<img
					src={Lin}
					className="social-icon"
					alt="lin"
					onClick={() => openLin("https://www.linkedin.com/in/yash-joshi76/")}
				/>
				<img
					src={Insta}
					className="social-icon"
					alt="insta"
					onClick={() => openLin("https://www.instagram.com/yashjoshhi/?hl=en")}
					target="_blank"
				/>
			</div>
		</nav>
	);
};
