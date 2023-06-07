import { configureStore } from "@reduxjs/toolkit";
import tournamentListReducer from "./tournamentListSlice";
import { tournamentApi } from "./tournamentApi";

export const store = configureStore({
  reducer: {
    tournamentList: tournamentListReducer,
    [tournamentApi.reducerPath]: tournamentApi.reducer,
  },
  devTools: true,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([tournamentApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
