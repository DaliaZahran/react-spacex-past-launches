import { cleanup, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import App from "./App";
import { render } from "./testing/setupTest";

describe("Launch Homepage", () => {
  // automatically unmount and cleanup DOM after the test is finished.

  afterEach(cleanup);

  it("renders home page with no error", async () => {
    act(() => {
      render(<App />);
    });
    await waitFor(() => {
      expect(screen.queryByText("Loading ...")).not.toBeInTheDocument();
    });
  });
});
