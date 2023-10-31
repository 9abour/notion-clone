"use client";

import { useState } from "react";
import Cookies from "js-cookie";

export const useTheme = () => {
	const [theme, setTheme] = useState(Cookies.get("theme"));

	if (typeof window !== "undefined") {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
			document.documentElement.classList.remove("light");
		} else {
			document.documentElement.classList.add("light");
			document.documentElement.classList.remove("dark");
		}
	}

	const toggle = async () => {
		setTheme(prev => (prev === "dark" ? "light" : "dark"));
		Cookies.set("theme", theme === "dark" ? "light" : "dark");
	};

	return {
		theme,
		toggle,
	};
};
