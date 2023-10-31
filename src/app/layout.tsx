import React from "react";
import PageLoader from "@/components/common/Loading/PageLoader";
import { IChildren } from "@/globalTypes";
import { cookies } from "next/headers";
import "./globals.css";
import { GlobalStyles } from "@/styles/globals";
import ThemeContext from "@/context/themeContext";

export const metadata = {
	title: "Notion",
	description: "Notion clone with Next.js",
};

export default function RootLayout({ children }: IChildren) {
	let theme = cookies().get("theme");

	return (
		<html lang="en">
			<body className={`${theme?.value}`}>
				<ThemeContext defaultTheme={theme?.value}>
					<GlobalStyles />
					<PageLoader theme={theme?.value} />
					{children}
				</ThemeContext>
			</body>
		</html>
	);
}
