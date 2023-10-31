"use client";
import { useTheme } from "@/hooks/useTheme";

export default function Home() {
	const { toggle } = useTheme();

	return (
		<>
			<button onClick={toggle}>Toggle</button>
		</>
	);
}
