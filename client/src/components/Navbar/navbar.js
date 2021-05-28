import React from "react";
import Ghost from "../../images/ghost.gif";
import "./style.css";

export const Navbar = () => {
	function handleClick() {
		window.location.reload();
	}

	return (
		<nav className="navbar">
			<div id="text">
				INDIGHO
				<div style={{ display: "contents" }}>
					<img style={{ height: "40px" }} alt="owl" src={Ghost} />
				</div>{" "}
			</div>
			{/* <div className="user"></div> */}
		</nav>
	);
};
