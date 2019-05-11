import React from "react";
import { useActions } from "typeless";
import {
	useGeolocationModule,
	GeolocationActions,
	getGeolocationState
} from "../state/Geolocation/interface";

interface GeolocationProps {}

const Geolocation: React.FC<GeolocationProps> = () => {
	useGeolocationModule();
	const { getPosition } = useActions(GeolocationActions);
	const { latitude, longitude } = getGeolocationState.useState();

	if (navigator.geolocation)
		navigator.geolocation.getCurrentPosition(getPosition);

	return (
		<div>
			<h1>Geolocation</h1>
			<div>Latitude: {latitude}</div>
			<div>Longitude: {longitude}</div>
		</div>
	);
};

export default Geolocation;
