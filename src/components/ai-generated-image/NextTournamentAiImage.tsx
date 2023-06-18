import Image from "next/image";
import { store } from "../../store";

async function getAiGolfImage(course:string, country:string): Promise<any> {
  const params = new URLSearchParams({
    course,
    country
  });
  const res = await fetch(
    "http://localhost:3000/openai?" + params.toString()
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary // need to implement these
    throw new Error("Failed to fetch tournaments list");
  }
  return res.json();
}

export default async function NextTournamentAiImage() {
  const nextTournamentDetailFromState =
    store.getState().tournamentList.nextTournamentDetail;

  const { country, course } = nextTournamentDetailFromState || {
    country: "",
    course: "",
  };

  // commented to save api calls
  // const aiImageUrl = await getAiGolfImage(course, country)

  const aiImageUrl = null;

  return (
    <span className="rounded-lg overflow-hidden w-full sm:w-96 h-36 sm:h-48 sm:-mt-12 flex overflow-hidden justify-center items-center">
      <Image
        src={aiImageUrl || "/placeholder.svg"}
        alt="ai generated image of the golf course"
        width={640}
        height={640}
        priority
      />
    </span>
  );
}
