import React from "react";
import Ghost from "../../images/ghost.gif";
import "./style.css";

export const Navbar = () => {
	function handleClick() {
		window.location.reload();
	}

	return (
		<nav className="navbar">
			{/* <div className="logo">
				<div className="header text">
					<span className="doti">doti</span>
					<div>
						<img alt="owl" src={Ghost} />
					</div>{" "}
				</div>
			</div> */}

			<div id="text">
				{" "}
				Get Indie-Alt Music Suggestions from DOTI{" "}
				<div style={{ display: "contents" }}>
					<img alt="owl" src={Ghost} />
				</div>{" "}
			</div>
		</nav>
	);
};
