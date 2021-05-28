import React from "react";

export const Skeleton = () => {
	return (
		<div className="spotify-artist">
			<div className="artist">
				<div className="user-details">
					<div
						style={{
							backgroundImage: ``,
							backgroundPosition: "center",
						}}
					></div>
					<div id="greet"></div>
				</div>

				<div className="desc-indi"></div>
			</div>
			<div className="user-details">
				<div
					style={{
						backgroundImage: ``,
						backgroundPosition: "center",
					}}
				></div>
				<div id="greet"></div>
			</div>
		</div>
	);
};
