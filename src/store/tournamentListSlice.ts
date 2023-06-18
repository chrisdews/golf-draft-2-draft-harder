import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TourList, NextTournamentDetail } from "@/types/tournamentList";

interface TourListState {
  tourList: TourList;
  selectedTour: string | null;
  nextTournamentDetail: NextTournamentDetail | null
}

const initialState: TourListState = {
  selectedTour: null,
  tourList: [],
  nextTournamentDetail: null
};


// setStartTourList and setSelectedTour are example of ssr with hydration. Not currently in use.
const tourListSlice = createSlice({
  name: "tourList",
  initialState,
  reducers: {
    setStartTourList(state, action: PayloadAction<TourList>) {
      state.tourList = action.payload;
    },
    setSelectedTour(state, action: PayloadAction<string>) {
      state.selectedTour = action.payload;
    },
    setNextTournament(state, action: PayloadAction<NextTournamentDetail>){
      state.nextTournamentDetail = action.payload

    }
  },
});

export const { setStartTourList, setSelectedTour, setNextTournament } = tourListSlice.actions;
export default tourListSlice.reducer;
