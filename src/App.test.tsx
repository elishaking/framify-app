import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders header", () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/Framify/i);
  expect(headingElement).toBeInTheDocument();
});
