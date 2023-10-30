"use client";

import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "@/context/themeContext";

const Theme = ({ children }: { children: React.ReactNode }) => {
	const darkTheme = {
		primaryBackground: "#1a1a1a",
		secondaryBackground: "#212121",
		grayBackground: "#262626",
		grayColor: "#8a8a8a",
		whiteColor: "#d4d4d4",
	};

	const lightTheme = {
		primaryBackground: "#ffffff",
		secondaryBackground: "#f6f6f4",
		grayBackground: "#fafaf9",
		grayColor: "#999894",
		whiteColor: "#37352f",
	};

	const { theme } = useContext(ThemeContext);

	return (
		<ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
			{children}
		</ThemeProvider>
	);
};

export default Theme;
