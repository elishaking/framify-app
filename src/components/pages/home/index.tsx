import React from "react";
import { useHistory } from "react-router-dom";

import { PageTemplate } from "../../templates";
import { Button } from "../../atoms";

export const HomePage = () => {
  const history = useHistory();

  return (
    <PageTemplate>
      <h3>You have not made any uploads</h3>
      <Button onClick={() => history.push("/upload")}>Upload</Button>
    </PageTemplate>
  );
};
