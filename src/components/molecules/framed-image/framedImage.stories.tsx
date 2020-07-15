import React from "react";
import { storiesOf } from "@storybook/react";

import { FramedImageItem } from ".";

storiesOf("FramedImageItem", module).add("default", () => (
  <FramedImageItem
    framedImage={{
      imageUrl: "https://avatarmaker.net/images/1.png",
      date: Date.now(),
      size: 20000,
    }}
  />
));
