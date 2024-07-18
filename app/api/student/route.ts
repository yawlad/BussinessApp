import { convertKeys } from "@/utils/TextUtils";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = convertKeys(await request.json(), true);
    if (!data.name || !data.lesson_cost) throw new Error("Bad Data");
    await sql`INSERT INTO Student (name, lesson_cost, start_balance) VALUES (${data.name}, ${data.lesson_cost}, ${data.start_balance});`;
    const students = convertKeys(await sql`SELECT * FROM Student;`, false);
    return NextResponse.json({ students }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const students = convertKeys(await sql`SELECT * FROM Student;`, false);
    return NextResponse.json({ students }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
