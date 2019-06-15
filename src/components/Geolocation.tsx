import React, { FC } from "react";

type GeolocationProps = {
	latitude: number | null;
	longitude: number | null;
};

const Geolocation: FC<GeolocationProps> = ({ latitude, longitude }) => {
	return (
		<div>
			<h1>Geolocation</h1>
			<div>latitude: {latitude}</div>
			<div>longitude: {longitude}</div>
		</div>
	);
};

export default Geolocation;
