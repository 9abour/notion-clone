import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
	const cookiesStore = cookies();

	const theme = cookiesStore.get("theme");

	return NextResponse.json(theme?.value);
};
