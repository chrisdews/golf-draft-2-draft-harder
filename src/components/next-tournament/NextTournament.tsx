import { store } from "../../store";
import { setNextTournament } from "../../store/tournamentListSlice";

interface Tour {
  tour_id: string;
  tour_name: string;
  season_id: string;
  active: number;
}

async function fetchActivePgaTour(): Promise<any> {
  const res = await fetch("http://localhost:3000/rapidapi/active-pga-tour");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch tournaments list");
  }
  return res.json();
}

async function fetchNextTournament(activePgaTour: Tour): Promise<any> {
  const params = new URLSearchParams({
    tourId: activePgaTour.tour_id,
    seasonId: activePgaTour.season_id,
  });
  const res = await fetch(
    "http://localhost:3000/rapidapi/next-tournament?" + params.toString()
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary // need to implement these
    throw new Error("Failed to fetch tournaments list");
  }
  return res.json();
}

// server side
export default async function NextTournament() {
  const { activePgaTour } = await fetchActivePgaTour();
  const { nextTournamentDetail } = await fetchNextTournament(activePgaTour[0]);

  store.dispatch(setNextTournament(nextTournamentDetail));
  const nextTournamentDetailFromState =
    store.getState().tournamentList.nextTournamentDetail;

  const { name, country, course } = nextTournamentDetailFromState || {
    name: "",
    country: "",
    course: "",
  };

  return (
    <div className="flex flex-col w-full">
      <h3 className="font-bold">{name}</h3>
      <h4>{course}</h4>
      <h5>{country}</h5>
    </div>
  );
}
