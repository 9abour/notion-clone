"use client";

import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useTheme } from "@/hooks/useTheme";
import { IChildren } from "@/globalTypes";

const Title = styled.div`
	background-color: ${({ theme }) => theme.primaryBackground};
	color: ${({ theme }) => theme.textColor};
`;

const Theme = ({ children }: IChildren) => {
	const darkTheme = {
		primaryBackground: "#1a1a1a",
		secondaryBackground: "#212121",
		grayBackground: "#262626",
		grayColor: "#8a8a8a",
		textColor: "#d4d4d4",
	};

	const lightTheme = {
		primaryBackground: "#ffffff",
		secondaryBackground: "#f6f6f4",
		grayBackground: "#fafaf9",
		grayColor: "#999894",
		textColor: "#37352f",
	};

	const { theme } = useTheme();

	return (
		<ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
			<Title>Hello</Title>
			{children}
		</ThemeProvider>
	);
};

export default Theme;
