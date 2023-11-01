import { cookies } from "next/headers";

export const getTheme = (): string => {
	let storedTheme = cookies().get("theme");
	let theme = storedTheme ? storedTheme.value : "dark";

	return theme;
};
