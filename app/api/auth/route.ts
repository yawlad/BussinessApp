import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    if (!data.password)
      return NextResponse.json({ message: "Bad Data" }, { status: 400 });
    if (data.password != "1234")
      return NextResponse.json({ message: "Bad password" }, { status: 401 });
    return NextResponse.json({ message: "Logged In" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
