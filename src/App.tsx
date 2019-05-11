import React from "react";

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

import logo from "./logo.svg";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Counter from "./containers/Counter";
import Form from "./containers/Form";
import "./App.css";
import Button from "./components/Button";
import Geolocation from "./containers/Geoloaction";

const App: React.FC = () => {
	return (
		<div className="App">
			<Header title="Dev Education" />
			<Content>
				{/* This content is sending as the children prop */}
				<p>
					This is our <strong>{`<Content>`}</strong> component
				</p>
			</Content>
			<Counter />
			<Form />
			<Geolocation />
			<Button>
				<img src={logo} alt={"Button logo"} />
				<span>Click me!</span>
			</Button>
			<Button>
				<span>Click me!</span>
			</Button>
			<Footer copyright={`Dev.education ${new Date().getFullYear()}`} />
		</div>
	);
};

export default App;
