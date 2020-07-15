import React from "react";
import { storiesOf } from "@storybook/react";

import { FramedImageList } from ".";

const framedImages = new Array(10).fill(0).map((n, i) => ({
  imageUrl: `https://avatarmaker.net/images/${i + 1}.png`,
  date: Date.now(),
  size: 20000,
}));

storiesOf("FramedImageList", module).add("default", () => (
  <FramedImageList framedImages={framedImages} />
));
