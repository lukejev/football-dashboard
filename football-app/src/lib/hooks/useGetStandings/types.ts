import { TeamStanding } from "@/app/components/LeagueTable/types";

export type GetStandings = {
  league: number;
  season: number;
};

export type GetStandingsReturnType = {
  standings: TeamStanding[],
  isLoading: boolean;
  error: any;
}