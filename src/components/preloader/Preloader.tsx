"use client";

import { useRef } from "react";
import { store } from "@/store";
import { setStartTourList, setSelectedTour } from "@/store/tournamentListSlice";
import { TourList } from "@/types";

// This component is used to pre-load the initial server state into the client side store
export function Preloader({
  tourList,
  selectedTourFromState,
}: {
  tourList: TourList;
  selectedTourFromState: string;
}) {
  const loaded = useRef(false);
  if (!loaded.current) {
    loaded.current = true;
    store.dispatch(setStartTourList(tourList));
    store.dispatch(setSelectedTour(selectedTourFromState));
  }

  return null;
}

export default Preloader;
