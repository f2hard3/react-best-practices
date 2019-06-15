import React from "react";
import "./App.css";
// interface ButtonProps {
// 	name: string;
// }

// const Button: React.FC<ButtonProps> = ({ name }) => {
// 	let input: any;
// 	const onClick = () => input.focus();
// 	return (
// 		<div>
// 			{" "}
// 			<input ref={el => (input = el)} />
// 			<button onClick={onClick}>Focus</button>
// 		</div>
// 	);
// };

// export default Button;

// import logo from "./logo.svg";
// import Header from "./components/Header";
// import Content from "./components/Content";
// import Footer from "./components/Footer";
// import Counter from "./containers/Counter";
// import Form from "./containers/Form";

// import Button from "./components/Button";
// import GeolocationClass from "./containers/GeolocationClass";

// const App: React.FC = () => {
// 	return (
// 		<div className="App">
// 			<Header title="Dev Education" />
// 			<Content>
// 				{/* This content is sending as the children prop */}
// 				<p>
// 					This is our <strong>{`<Content>`}</strong> component
// 				</p>
// 			</Content>
// 			<Counter />
// 			<Form />
// 			<GeolocationClass />
// 			<Button>
// 				<img src={logo} alt={"Button logo"} />
// 				<span>Click me!</span>
// 			</Button>
// 			<Button>
// 				<span>Click me!</span>
// 			</Button>
// 			<Footer copyright={`Dev.education ${new Date().getFullYear()}`} />
// 		</div>
// 	);
// };

// import Gists from "./components/Gists";
// import Circle from "./components/Form";

import radium from "radium";

const styles = {
	backgroundColor: "#ff0000",
	width: 320,
	padding: 20,
	borderRadius: 5,
	border: "none",
	outline: "none",
	":hover": { color: "#fff" },
	":active": { positon: "relative", top: 2 },
	"@media(max-width: 480px)": { width: 160 }
};

const App: React.FC = () => (
	<radium.StyleRoot>
		<button style={styles}>Click me!</button>
	</radium.StyleRoot>
);

export default App;
