import React, { useState } from "react";
import styled from "styled-components";

import { PageTemplate } from "../../templates";
import { ImageTransform } from "../../organisms";
import { Button } from "../../atoms";
import { FileButton } from "../../molecules";

const Actions = styled.div`
  margin-bottom: 3em;

  button {
    margin-right: 1em;
  }
`;

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
    src: "",
  });

  const [imageAdded, setImageAdded] = useState(false);

  const onUpdate = (payload: any) => {
    updateImageState({
      ...imageState,
      ...payload,
    });
  };

  const getImageSize = (dataUrl: string): Promise<number[]> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve([img.width, img.height]);
      };
      img.src = dataUrl;
    });
  };

  const handleImage = (dataUrl: string) => {
    setImageAdded(true);
    getImageSize(dataUrl).then((size) => {
      const [width, height] = size;
      updateImageState({
        ...imageState,
        width,
        height,
        src: dataUrl,
      });
    });
  };

  return (
    <PageTemplate>
      <Actions>
        {imageAdded ? (
          <>
            <Button>Publish</Button>
            <Button>Reset</Button>
          </>
        ) : (
          <FileButton handleFile={handleImage}>Add Image</FileButton>
        )}
      </Actions>
      <ImageTransform transformProps={imageState} onUpdate={onUpdate} />
    </PageTemplate>
  );
};
