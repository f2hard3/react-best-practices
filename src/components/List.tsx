import React from "react";
import Item from "./Item";

interface LIstProps {
	collection: Array<any>;
	titleKey: string;
	textKey: string;
}

const List: React.FC<LIstProps> = ({ collection, titleKey, textKey }) => {
	return (
		<ul>
			{collection.map(item => (
				<Item key={item.id} title={item[titleKey]} text={item[textKey]} />
			))}
		</ul>
	);
};

export default List;
