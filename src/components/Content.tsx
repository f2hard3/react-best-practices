import React from "react";

interface ContentProps {
	children?: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => (
	<div className="Content">{children}</div>
);

export default Content;
