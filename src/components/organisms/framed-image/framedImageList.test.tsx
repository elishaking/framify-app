import React from "react";
import { render } from "@testing-library/react";
import { FramedImageList } from ".";

describe("<FramedImageList />", () => {
  const nFramedImages = 10;
  const framedImages = new Array(nFramedImages).fill(0).map((n, i) => ({
    id: i.toString(),
    imageUrl: `image-${i}`,
    date: Date.now(),
    size: 20000,
  }));
  let framedImageList: any;

  describe("Rendering", () => {
    beforeEach(() => {
      framedImageList = render(<FramedImageList framedImages={framedImages} />);
    });

    it("should render wrapper", () => {
      const wrapperElement = framedImageList.getByLabelText("framed-img-list");
      expect(wrapperElement).toBeInTheDocument();
    });

    it("should render all framed image items", () => {
      const itemElements = framedImageList.getAllByLabelText("framed-img-item");
      expect(itemElements.length).toBe(nFramedImages);
    });

    it("should render correct image for a given item", () => {
      const itemElement: HTMLDivElement = framedImageList.getAllByLabelText(
        "framed-img-item"
      )[0];

      const imgs = itemElement.getElementsByTagName("img");
      expect(imgs.length).toEqual(1);
      expect(imgs[0].src).toContain(framedImages[0].imageUrl);
    });
  });
});
