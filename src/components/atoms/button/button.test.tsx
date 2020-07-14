import React from "react";
import { render } from "@testing-library/react";
import { Button } from ".";

describe("<Button />", () => {
  let button: any;
  const buttonText = "Hello";
  describe("Rendering", () => {
    beforeEach(() => {
      button = render(<Button>{buttonText}</Button>);
    });

    it("should render with text", () => {
      const text = button.getByText(buttonText);
      expect(text).toBeInTheDocument();
    });
  });
});
