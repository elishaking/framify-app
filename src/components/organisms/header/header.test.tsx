import React from "react";
import { render } from "@testing-library/react";
import { Header } from ".";
import { MemoryRouter } from "react-router-dom";

describe("<Header />", () => {
  let header: any;
  describe("Rendering", () => {
    beforeEach(() => {
      header = render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );
    });

    it("should render heading-text/logo", () => {
      const headingElement = header.getByText(/Framify/i);
      expect(headingElement).toBeInTheDocument();
    });

    it("should render home link", () => {
      const homeLink = header.getByLabelText("home-link");
      expect(homeLink).toBeInTheDocument();
    });

    it("should render home link", () => {
      const uploadLink = header.getByLabelText("upload-link");
      expect(uploadLink).toBeInTheDocument();
    });
  });
});
