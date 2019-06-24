import React from 'react';

interface ItemProps {
	key: string;
	item: string;
	onChange: any;
}

const Item: React.FC<ItemProps> = ({ key, item, onChange }) => {
	return (
		<li key={key}>
			<h1>{item}</h1>
			<input type="text" onChange={onChange} />
		</li>
	);
};

export default Item;
