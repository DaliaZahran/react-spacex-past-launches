import * as React from "react";

import LaunchCard from "./LaunchCard";
import { usePastLaunchesQuery } from "../../graphql/useRequest";
import { GET_LAUNCHES_PAST } from "../../graphql/graphql";
import "./LaunchList.css";

const LaunchList = () => {
  const { loading, error, data } = usePastLaunchesQuery(GET_LAUNCHES_PAST);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return (
      <div>
        ERROR fetching data from api server, error message: {error?.message}
      </div>
    );
  }

  const launchesPast = data.launchesPast;

  return (
    <div className="flex-layout">
      {launchesPast
        ? launchesPast.map((launch, i) => (
            <LaunchCard launch={launch} key={i}></LaunchCard>
          ))
        : null}
    </div>
  );
};

export default LaunchList;
