import Home from "@/app/page";
import ThemeContext from "@/context/themeContext";
import { render, screen, fireEvent } from "@testing-library/react";

it("Should have initial theme and toggle the theme", () => {
	const initialTheme = "dark";

	render(
		<ThemeContext defaultTheme={initialTheme}>
			<Home />
		</ThemeContext>
	);

	const setThemeBtn = screen.getByText(initialTheme);

	expect(screen.getByText("dark")).toBeInTheDocument();

	fireEvent.click(setThemeBtn);

	expect(screen.getByText("light")).toBeInTheDocument();

	fireEvent.click(setThemeBtn);

	expect(screen.getByText("dark")).toBeInTheDocument();
});
