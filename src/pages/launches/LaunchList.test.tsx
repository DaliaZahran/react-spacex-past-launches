import { cleanup, waitFor, screen } from "@testing-library/react";
import LaunchList from "./LaunchList";
import { render } from "../../testing/setupTest";
import { act } from "react-dom/test-utils";

describe("Launch Detail View", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it("renders without error", async () => {
    act(() => {
      render(<LaunchList />);
    });
    await waitFor(() => {
      expect(screen.queryByText("Loading ...")).not.toBeInTheDocument();
    });
  });
});
