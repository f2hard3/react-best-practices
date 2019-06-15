import React from "react";

// interface FunctionAsChildProps {
// 	children: Function;
// }

const FunctionAsChild = ({ children }: { children: Function }) => children();

export default FunctionAsChild;

<FunctionAsChild>{() => <div>Hello, World!</div>}</FunctionAsChild>;
