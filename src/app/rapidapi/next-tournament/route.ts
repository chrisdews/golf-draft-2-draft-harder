import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {

    const tourId = req.nextUrl.searchParams.get("tourId");
    const seasonId = req.nextUrl.searchParams.get("seasonId");

    const fixturesRes = await fetch(
      `https://golf-leaderboard-data.p.rapidapi.com/fixtures/${tourId}/${seasonId}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY as string,
          "x-rapidapi-host": "golf-leaderboard-data.p.rapidapi.com",
        },
      }
    );

    const fixturesData = await fixturesRes.json();

    const nextTournamentDetail = fixturesData?.results
      ?.filter(
        (tournament: { type: string }) => tournament?.type === "Stroke Play"
      )
      .filter(
        (tournament: { end_date: string }) =>
          Date.parse(tournament?.end_date) > Date.now()
      )
      .sort(
        (a: { start_date: string }, b: { start_date: string }) =>
          Date.parse(a?.start_date) - Date.parse(b?.start_date)
      )?.[0];

    return NextResponse.json({nextTournamentDetail});
  } catch {
    return NextResponse.json(
      { error: `Internal Server Error - next tournament` },
      { status: 500 },
      
    );
  }
}
