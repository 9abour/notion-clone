"use client";

import React, { useEffect, useState } from "react";
import "./loading.css";
import { useTheme } from "@/hooks/useTheme";

const PageLoader = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	}, []);

	const { theme } = useTheme();

	return isLoading ? (
		<div
			style={{
				backgroundColor: theme === "dark" ? "black" : "white",
				color: theme === "dark" ? "white" : "black",
			}}
			className={`page-loader ${theme}`}
		>
			Loading...
		</div>
	) : null;
};

export default PageLoader;
