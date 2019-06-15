// import React, { useRef, InputHTMLAttributes } from "react";

// const handleClick = (event: React.SyntheticEvent) => {
// 	switch (event.type) {
// 		case "click":
// 			console.log("clicked");
// 			break;
// 		case "dblclick":
// 			console.log("double clicked");
// 			break;
// 		default:
// 			console.log("unhandled", event.type);
// 	}
// };

// const ButtonEvent = () => {
// 	const inputEl = useRef<HTMLInputElement>(null);

// 	const onButtonClick = () => {
// 		inputEl.current.focus();
// 	};

// 	return (
// 		<>
// 			<input ref={inputEl} type="text" />
// 			<button onClick={onButtonClick} onDoubleClick={handleClick}>
// 				Click me!
// 			</button>
// 		</>
// 	);
// };

// export default ButtonEvent;

// import React from "react";
// import { Motion, spring } from "react-motion";

// const Transition = () => (
// 	<Motion defaultStyle={{ opacity: 0.01 }} style={{ opacity: spring(1) }}>
// 		{interpolatingStyle => <h1 style={interpolatingStyle}> Hello React </h1>}
// 	</Motion>
// );

// export default Transition;

import React from "react";

const Circle = ({
	x,
	y,
	radius,
	fill
}: {
	x: number;
	y: number;
	radius: number;
	fill: string;
}) => (
	<svg>
		<circle cx={x} cy={y} r={radius} fill={fill} />
	</svg>
);

export default Circle;
