"use client";

import { themeContext } from "@/context/themeContext";
import { useContext } from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
	background-color: ${({ theme }) => theme.textColor};
`;

const Title = styled.h2`
	color: ${({ theme }) => theme.textColor};
`;
export default function Home() {
	const { toggle } = useContext(themeContext);

	return (
		<div>
			<ToggleButton onClick={toggle}>Toggle</ToggleButton>
			<Title>Hello</Title>
		</div>
	);
}
