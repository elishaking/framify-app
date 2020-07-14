import React, { useState } from "react";
import styled from "styled-components";

import { PageTemplate } from "../../templates";
import { ImageTransform } from "../../organisms";
import { Button } from "../../atoms";

export const UploadPage = () => {
  const [imageState, updateImageState] = useState({
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1,
    width: 100,
    height: 100,
    angle: 0,
    classPrefix: "tr",
    styles: {},
  });

  const [imageAdded, setImageAdded] = useState(false);

  const onUpdate = (payload: any) => {
    updateImageState({
      ...imageState,
      ...payload,
    });
  };

  const Actions = styled.div`
    margin-bottom: 3em;

    button {
      margin-right: 1em;
    }
  `;

  return (
    <PageTemplate>
      <Actions>
        {imageAdded ? (
          <>
            <Button>Publish</Button>
            <Button>Reset</Button>
          </>
        ) : (
          <Button>Add Image</Button>
        )}
      </Actions>
      <ImageTransform transformProps={imageState} onUpdate={onUpdate} />
    </PageTemplate>
  );
};
