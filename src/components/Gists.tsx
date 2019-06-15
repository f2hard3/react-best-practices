import React, { useState, useEffect } from "react";

type Gist = {
	id: string;
	description: string;
};

const Gists: React.FC = () => {
	const [gists, setGists]: Array<any> = useState([]);

	useEffect(() => {
		const url = "https://api.github.com/users/gaearon/gists";
		fetch(url)
			.then(response => response.json())
			.then(gists => setGists(gists));
	});
	return (
		<ul>
			{gists.map((gist: Gist) => (
				<li key={gist.id}>{gist.description}</li>
			))}
		</ul>
	);
};

export default Gists;
