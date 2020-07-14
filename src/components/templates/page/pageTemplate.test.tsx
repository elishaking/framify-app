import React from "react";
import { render } from "@testing-library/react";
import { PageTemplate } from ".";
import { MemoryRouter } from "react-router-dom";

describe("<PageTemplate />", () => {
  let pageTemplate: any;
  describe("Rendering", () => {
    beforeEach(() => {
      pageTemplate = render(
        <MemoryRouter>
          <PageTemplate>
            <h1>New Page</h1>
          </PageTemplate>
        </MemoryRouter>
      );
    });

    it("should render heading", () => {
      const headingElement = pageTemplate.getByText(/Framify/i);
      expect(headingElement).toBeInTheDocument();
    });

    it("should render footer", () => {
      const footerElement = pageTemplate.getByText(/Copyright/i);
      expect(footerElement).toBeInTheDocument();
    });
  });
});
