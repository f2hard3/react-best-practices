import React from "react";

interface withClassNameProps {
	className: string;
}

const withClassName = (Component: React.FC<withClassNameProps>) => (
	props: withClassNameProps
) => <Component {...props} className="my-class" />;

const MyComponent = ({ className }: { className: string }) => (
	<div className={className} />
);

const MyComponentWithClassName = withClassName(MyComponent);

interface user {
	name: string;
	age: string;
}
