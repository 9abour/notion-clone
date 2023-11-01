"use client";

import { IPropsDefaultTheme, IThemeContext } from "@/globalTypes";
import { createContext, useState } from "react";
import Cookies from "js-cookie";
import { ThemeProvider } from "styled-components";

const initialState = {
	theme: "",
	toggle: () => {},
};

export const themeContext = createContext<IThemeContext>(initialState);

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

const ThemeContext = ({ children, defaultTheme }: IPropsDefaultTheme) => {
	const [theme, setTheme] = useState(defaultTheme);

	const toggle = () => {
		const newTheme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);

		Cookies.set("theme", newTheme);

		document.documentElement.setAttribute("data-theme", newTheme);
	};

	return (
		<themeContext.Provider value={{ theme, toggle }}>
			<ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
				{children}
			</ThemeProvider>
		</themeContext.Provider>
	);
};

export default ThemeContext;
