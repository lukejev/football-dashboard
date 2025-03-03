import { RAPID_API_HOST } from "./config";

export type FetcherType = {
  url: string;
  method?: string;
}

export const fetcher = async (url: string, apiKey: string) => {
  return await fetch(url, {
    headers: {
      "x-rapidapi-host": RAPID_API_HOST,
      "x-rapidapi-key": apiKey,
      // "x-rapidapi-key": process.env.FOOTBALL_API_KEY || "",
    },
  }).then(r => r.json());
};
