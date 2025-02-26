export type Standings = {
  country: string;
  flag: string;
  id: number;
  logo: string;
  name: string;
  standings: TeamStanding[]
};

export type TeamStanding = {
  team: Team;
  points: number;
}

export type Team = {
  id: number;
  logo: string;
  name: string;
}