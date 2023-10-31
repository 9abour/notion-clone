import { ReactNode } from "react";

export type IChildren = {
	children: ReactNode;
};

export interface IPropsDefaultTheme extends IChildren {
	defaultTheme: string | undefined;
}

export type IThemeContext = {
	theme: string | undefined;
	toggle: () => void;
};
