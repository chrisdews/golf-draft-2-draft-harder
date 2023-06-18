import TourSelection from "@/components/tour-selection/TourSelection";
import PrimaryButton from "@/components/primary-button/PrimaryButton";
import NextTournament from "@/components/next-tournament/NextTournament";
import NextTournamentAiImage from "@/components/ai-generated-image/NextTournamentAiImage";

export default async function Home() {
  return (
    <main className="flex h-[85vh] flex-col items-center gap-2 p-4 max-w-7xl m-auto">
      <h1 className="text-2xl font-bold mb-2 w-full">Next Tournament</h1>
      <span className="flex flex-col-reverse gap-2 w-full sm:flex-row">
        <NextTournament />
        <NextTournamentAiImage />
      </span>
      <span className="flex ">
        <PrimaryButton
          path={"/create"}
          className="bg-blue-500 hover:bg-blue-700"
        >
          CREATE
        </PrimaryButton>
        <PrimaryButton
          path={"/join"}
          className="bg-green-500 hover:bg-green-700"
        >
          JOIN
        </PrimaryButton>
      </span>
    </main>
  );
}
