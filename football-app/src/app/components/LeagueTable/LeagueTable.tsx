"use client"

import { useGetStandings } from "@/lib/hooks/useGetStandings/useGetStandings";

const LeagueTable = () => {
  const { standings, error, isLoading } = useGetStandings({ league: 39, season: 2021 })

  // const standings: TeamStanding[] = data?.response[0]?.league.standings[0];

  console.log({ standings, error })

  // if (isLoading) return <p>Loading</p>

  // if (error && !isLoading) return <p>Error</p>

  return (
    <div>
      <h2>Standings for 2021</h2>
      {/* {standings?.map(({ team, points }) => {
        return (
          <p key={team.id}>{team?.name} - {points}</p>
        )
      })} */}
    </div>
  )
}
export default LeagueTable