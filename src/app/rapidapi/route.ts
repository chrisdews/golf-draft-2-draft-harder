import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `https://golf-leaderboard-data.p.rapidapi.com/tours`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY as string,
        "x-rapidapi-host": "golf-leaderboard-data.p.rapidapi.com",
      },
    }
  );

  const data = await res.json();

  return NextResponse.json({ data });
}
