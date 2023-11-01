import React from "react";
import PageLoader from "@/components/common/Loading/PageLoader";
import { IChildren } from "@/globalTypes";
import "./globals.css";
import { GlobalStyles } from "@/styles/globals";
import ThemeContext from "@/context/themeContext";
import { getTheme } from "@/helpers/getTheme";

export const metadata = {
	title: "Notion",
	description: "Notion clone with Next.js",
};

export default function RootLayout({ children }: IChildren) {
	let theme = getTheme();

	return (
		<html lang="en" suppressHydrationWarning data-theme={theme}>
			<body>
				<ThemeContext defaultTheme={theme}>
					<GlobalStyles />
					<PageLoader theme={theme} />
					{children}
				</ThemeContext>
			</body>
		</html>
	);
}
