import { DocumentNode, useQuery } from "@apollo/react-hooks";
import { Launches } from "../types/LaunchList";

export function usePastLaunchesQuery(gqlQuery: DocumentNode) {
  const { loading, error, data } = useQuery<Launches>(gqlQuery);
  return { loading, error, data };
}
