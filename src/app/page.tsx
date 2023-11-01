"use client";

import { themeContext } from "@/context/themeContext";
import { useContext, useState } from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
	background-color: ${({ theme }) => theme.textColor};
	color: ${({ theme }) => theme.primaryBackground};
`;

export default function Home() {
	const { toggle } = useContext(themeContext);

	const [theme, setTheme] = useState("dark");

	const handleToggle = () => {
		toggle();
		setTheme(prev => (prev === "dark" ? "light" : "dark"));
	};

	return (
		<div>
			<ToggleButton onClick={handleToggle}>{theme}</ToggleButton>
		</div>
	);
}
