"use client";

import { IPropsDefaultTheme } from "@/globalTypes";
import { useTheme } from "@/hooks/useTheme";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

const Theme = ({ children, defaultTheme }: IPropsDefaultTheme) => {
	const [primaryTheme, setPrimaryTheme] = useState(defaultTheme);

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

	useEffect(() => {
		setPrimaryTheme(theme);
	}, [theme]);

	return (
		<ThemeProvider theme={primaryTheme === "dark" ? darkTheme : lightTheme}>
			{children}
		</ThemeProvider>
	);
};

export default Theme;
