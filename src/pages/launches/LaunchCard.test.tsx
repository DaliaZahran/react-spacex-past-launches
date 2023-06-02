import { render, cleanup } from "@testing-library/react";
import { Launch } from "../../types/LaunchList";
import LaunchCard from "./LaunchCard";

describe("Launch Detail View", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it("renders without error", () => {
    const launch: Launch = {
      mission_name: "Mission",
      launch_date_utc: "",
      rocket: {
        rocket_name: "rocket",
      },
      links: {
        article_link: "https://",
        video_link: "https://",
      },
    };
    render(<LaunchCard launch={launch} />);
  });
});
