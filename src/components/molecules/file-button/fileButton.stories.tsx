import React from "react";
import { storiesOf } from "@storybook/react";

import { FileButton } from ".";

storiesOf("FileButton", module)
  .add("default", () => <FileButton>FileButton Text</FileButton>)
  .add("disabled", () => <FileButton disabled>FileButton Text</FileButton>);
