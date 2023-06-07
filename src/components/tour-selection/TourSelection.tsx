import { store } from "../../store";
import {
  setSelectedTour,
  setStartTourList,
} from "../../store/tournamentListSlice";
import TourDropdown from "../tour-dropdown/TourDropdown";
import Providers from "../providers/Providers"; // for passing the store to the client
import Preloader from "../preloader/Preloader";

interface Tour {
  tour_id: string;
  tour_name: string;
  season_id: string;
  active: number;
}

async function fetchTournamentsData(): Promise<any> {
  const res = await fetch("http://localhost:3000/rapidapi");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch tournaments list");
  }
  return res.json();
}

export default async function TourSelection() {
  const { data } = await fetchTournamentsData();
  const { results } = data;

  store.dispatch(setStartTourList(results));
  const tourListFromState = store.getState().tournamentList.tourList;

  store.dispatch(setSelectedTour("server side placeholder"));
  const selectedTourFromState =
    store.getState().tournamentList.selectedTour ?? "";

  return (
    <>
      <ol>
        <h1>Tour list server side 'store':</h1>
        {tourListFromState.map((tour: Tour) => (
          <li key={`${tour.tour_name}-${tour.season_id}`}>
            {tour.tour_name} - {tour.season_id}
          </li>
        ))}
      </ol>
      <Preloader
        tourList={tourListFromState}
        selectedTourFromState={selectedTourFromState}
      />
      <Providers>
        <TourDropdown />
      </Providers>
    </>
  );
}
