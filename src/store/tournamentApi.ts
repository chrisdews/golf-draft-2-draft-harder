import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

import { TourList } from "@/types/tournamentList";

export const tournamentApi = createApi({
  reducerPath: "tournamentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Tournament"],
  endpoints: (builder) => ({
    getTournamentList: builder.query<TourList, void>({
      query: () => "rapidapi",
      providesTags: (result, error, getTournamentList) => [
        { type: "Tournament", getTournamentList },
      ],
    }),
  }),
});
