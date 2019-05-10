import React from "react";

interface ItemProps {
	key: string;
	title: string;
	text?: string;
}

const Item: React.FC<ItemProps> = ({ key, title, text }) => {
	return (
		<li key={key}>
			<h1>{title}</h1>
			{text && <p>{text}</p>}
		</li>
	);
};

export default Item;
