"use client";

import React, { useEffect, useState } from "react";
import "./loading.css";

interface IProps {
	theme: string | undefined;
}

const PageLoader = ({ theme }: IProps) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	}, []);

	return isLoading ? (
		<div className={`page-loader ${theme}`}>
			<div>
				<h4>Loading...</h4>
			</div>
		</div>
	) : null;
};

export default PageLoader;
