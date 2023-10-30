"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

type IThemeContext = {
	theme: string;
	toggle: () => void;
};

export const ThemeContext = createContext<IThemeContext>({
	theme: "dark",
	toggle: () => {},
});

const ThemeSwitcher = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState("dark");

	const toggle = () => {
		setTheme(prev => (prev === "dark" ? "light" : "dark"));

		localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
	};

	useEffect(() => {
		const themeLS = localStorage.getItem("theme");

		if (typeof themeLS === "string") setTheme(themeLS);
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, toggle }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeSwitcher;
