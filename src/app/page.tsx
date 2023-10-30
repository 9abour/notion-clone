"use client";

import { ThemeContext } from "@/context/themeContext";
import { useContext } from "react";

export default function Home() {
	const { toggle } = useContext(ThemeContext);
	return (
		<>
			<h1>Hello</h1>
			<button onClick={toggle}>Toggle</button>
		</>
	);
}
