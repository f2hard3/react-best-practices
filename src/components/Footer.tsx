import React from "react";

interface FooterProps {
	copyright: string;
}

const Footer: React.FC<FooterProps> = ({ copyright }) => (
	<div className="Footer">
		<p>&copy; {copyright}</p>
	</div>
);

export default Footer;
