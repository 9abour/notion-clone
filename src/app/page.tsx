"use client";

import { themeContext } from "@/context/themeContext";
import { useContext } from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
	background-color: ${({ theme }) => theme.textColor};
	color: ${({ theme }) => theme.primaryBackground};
`;

export default function Home() {
	const { toggle, theme } = useContext(themeContext);

	return (
		<div>
			<ToggleButton onClick={toggle}>{theme}</ToggleButton>
		</div>
	);
}
