export interface Tour {
  tour_id: string;
  tour_name: string;
  season_id: string;
  active: number;
}
export type TourList = Tour[];

export interface NextTournamentDetail {
  id: number;
  type: string;
  status: string;
  name: string;
  tour_id: number;
  country: string;
  course: string;
  start_date: string;
  end_date: string;
  season: number;
  timezone: string;
  prize_fund: string;
  fund_currency: string;
  updated: string;
}
