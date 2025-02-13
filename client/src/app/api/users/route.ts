import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("http://localhost:5000/users");
  const data = await response.json();
  return NextResponse.json(data);
}
