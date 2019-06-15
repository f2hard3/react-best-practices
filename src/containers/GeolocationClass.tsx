import React from "react";
import Geolocation from "../components/Geolocation";

type GeolocationClassProps = {};

type GeolocationClassState = {
	latitude: number | null;
	longitude: number | null;
};

type coords = {
	latitude: number | null;
	longitude: number | null;
};

class GeolocationClass extends React.Component<
	GeolocationClassProps,
	GeolocationClassState
> {
	constructor(props: GeolocationClassProps) {
		super(props);
		this.state = { latitude: null, longitude: null };
		this.handleSuccess = this.handleSuccess.bind(this);
	}

	componentDidMount() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.handleSuccess);
		}
	}

	handleSuccess({ coords: { latitude, longitude } }: { coords: coords }) {
		this.setState({ latitude, longitude });
	}

	render() {
		return <Geolocation {...this.state} />;
	}
}

export default GeolocationClass;
