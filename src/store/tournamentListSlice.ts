import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TourList } from "@/types/tournamentList";

interface TourListState {
  tourList: TourList;
  selectedTour: string | null;
}

const initialState: TourListState = {
  selectedTour: null,
  tourList: [],
};

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
  },
});

export const { setStartTourList, setSelectedTour } = tourListSlice.actions;
export default tourListSlice.reducer;
