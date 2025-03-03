import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LeagueTable from "./components/LeagueTable/LeagueTable";

const queryClient = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <p>lol</p>
      <LeagueTable />
    </QueryClientProvider>
  );
}
