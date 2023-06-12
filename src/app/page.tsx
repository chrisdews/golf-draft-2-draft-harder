import Image from "next/image";
import TourSelection from "@/components/tour-selection/TourSelection";
import PrimaryButton from "@/components/primary-button/PrimaryButton";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />


      <PrimaryButton path={'/create'} className="bg-blue-500 hover:bg-blue-700">CREATE</PrimaryButton>
      <PrimaryButton path={'/join'} className="bg-green-500 hover:bg-green-700">JOIN</PrimaryButton>

      <TourSelection />
    </main>
  );
}
