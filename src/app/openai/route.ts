import { NextResponse, NextRequest } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// cached until call is made with new params
export async function GET(req: NextRequest) {
  const course = req.nextUrl.searchParams.get("course");
  const country = req.nextUrl.searchParams.get("country");

  const response = await openai.createImage({
    prompt: `a scenic landscape picture of a famous golf hole from ${course} golf course, with a small, realistic looking ${country} flag overlayed in the center of the image with 30% opacity. Make sure the fabric part of the flag is centered vertically and horizontally.`,
    n: 1,
    size: "512x512",
  });

  return NextResponse.json(response?.data?.data?.[0]?.url);
}
