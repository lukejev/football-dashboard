import { FOOTBALL_API_URL, RAPID_API_HOST } from "@/lib/config";
import getConfig from "next/config";
import { TeamStanding } from "./types";

const LeagueTable = async () => {
  const { publicRuntimeConfig } = getConfig()
  const data = await fetch(`${FOOTBALL_API_URL}/standings?league=39&season=2021`, {
    "method": "GET",
    headers: {
      "x-rapidapi-host": RAPID_API_HOST,
      "x-rapidapi-key": publicRuntimeConfig.footballApiKey,
    },
  });

  const standingsRes = await data.json();

  const standings: TeamStanding[] = standingsRes?.response[0]?.league.standings[0];

  return (
    <div>
      <h2>Standings for 2021</h2>
      {standings.map(({team, points}) => {
        return (
          <p key={team.id}>{team?.name} - {points}</p>
        )
      })}
    </div>
  )
}
export default LeagueTable