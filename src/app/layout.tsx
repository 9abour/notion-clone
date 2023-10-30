import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import React from "react";
import ThemeProvider from "@/providers/ThemeProvider";
import GlobalStyles from "@/styles/globalStyles";
import ThemeSwitcher from "@/context/themeContext";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Notion",
	description: "Notion clone",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={openSans.className}>
				<ThemeSwitcher>
					<ThemeProvider>
						<GlobalStyles />
						{children}
					</ThemeProvider>
				</ThemeSwitcher>
			</body>
		</html>
	);
}
