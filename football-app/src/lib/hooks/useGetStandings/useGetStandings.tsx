"use client"

import { fetcher } from "@/lib/fetcher";
import { GetStandings, GetStandingsReturnType } from "./types";
import { FOOTBALL_API_URL } from "@/lib/config";
import useSWR from 'swr'

export const useGetStandings = ({ league, season }: GetStandings): GetStandingsReturnType => {
  console.log("hook runs")
  const url = `${FOOTBALL_API_URL}/standings?league=${league}&season=${season}`;

  const key = process.env.FOOTBALL_API_KEY
  console.log({ key })

  const { data, error, isLoading } = useSWR(url, fetcher);

  console.log({ data })

  return {
    standings: data?.response[0]?.league.standings[0],
    isLoading,
    error,
  }
};