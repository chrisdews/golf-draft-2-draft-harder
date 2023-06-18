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

  const activePgaTour = data?.results?.filter(
    (tour: { tour_name: string | string[]; active: number }) =>
      tour.tour_name.includes("PGA") && tour.active
  );

  if (activePgaTour.length === 0) {
    return NextResponse.json(
      { error: "Internal Server Error - No Active PGA Tournament" },
      { status: 500 }
    );
  }

  return NextResponse.json({ activePgaTour });
}
