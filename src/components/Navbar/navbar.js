import React from "react";
import Ghost from "../../images/ghost.gif";
import "./style.css";

export const Navbar = () => {
	function handleClick() {
		window.location.reload();
	}

	return (
		<nav className="navbar">
			<div>
				<div className="logo">
					<div className="header text">
						<span className="doti">DOTI</span>
						<div>
							<img alt="owl" src={Ghost} />
						</div>{" "}
					</div>
				</div>
			</div>
		</nav>
	);
};
