import Home from "@/app/page";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

it("Should Html tag have data theme", () => {
	render(<Home />);

	const setThemeBtn = screen.getByText("dark");

	fireEvent.click(setThemeBtn);

	expect(setThemeBtn).toHaveTextContent("light");

	fireEvent.click(setThemeBtn);

	expect(setThemeBtn).toHaveTextContent("dark");
});
