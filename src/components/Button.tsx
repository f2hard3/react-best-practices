import React from "react";

interface ButtonProps {}

const Button: React.FC<ButtonProps> = ({ children }) => (
	<button className="btn">{children}</button>
);

export default Button;
