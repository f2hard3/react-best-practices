import React from "react";

type EventHandler = (
	event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

type ButtonsProps = {
	onDecrement: EventHandler;
	onIncrement: EventHandler;
};

export const Buttons: React.FC<ButtonsProps> = ({
	onDecrement,
	onIncrement
}) => {
	return (
		<div>
			<button onClick={onDecrement}>-</button>
			<button onClick={onIncrement}>+</button>
		</div>
	);
};
