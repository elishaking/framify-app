import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { PageTemplate } from "../../templates";
import { ImageTransform } from "../../organisms";
import { Button } from "../../atoms";
import { FileButton } from "../../molecules";

import { sendImage } from "../../../services/image";

const Actions = styled.div`
  margin-bottom: 3em;

  button {
    margin-right: 1em;
  }

  small {
    font-size: 0.7em;
    display: block;
    color: gray;
    margin-top: 0.3em;
  }
`;

const imageSize = {
  width: 100,
  height: 100,
};

export const UploadPage = () => {
  const history = useHistory();

  const [imageState, updateImageState] = useState({
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1,
    angle: 0,
    classPrefix: "tr",
    styles: {},
    src: "",
    ...imageSize,
  });

  const [imageAdded, setImageAdded] = useState(false);
  const [publishing, setPublishing] = useState(false);

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
      // TODO: keep image size within viewport
      const [width, height] = size;
      imageSize.width = width;
      imageSize.height = height;

      updateImageState({
        ...imageState,
        width,
        height,
        src: dataUrl,
      });
    });
  };

  const publishImage = () => {
    setPublishing(true);
    sendImage({
      dataUrl: imageState.src,
      rotationAngle: imageState.angle,
      scale: [imageState.scaleX, imageState.scaleY],
      size: [imageSize.width, imageSize.height],
    })
      .then((res) => {
        history.push("/", res.data);
        setPublishing(false);
      })
      .catch((err) => {
        console.log(err);
        setPublishing(false);
      });
  };

  const resetImage = () => {
    updateImageState({
      ...imageState,
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1,
      angle: 0,
      ...imageSize,
    });
  };

  const cancel = () => {
    updateImageState({
      ...imageState,
      src: "",
    });
    setImageAdded(false);
  };

  return (
    <PageTemplate showFooter={false}>
      <Actions>
        {imageAdded ? (
          <>
            <Button onClick={publishImage} disabled={publishing}>
              {publishing ? "Loading..." : "Publish"}
            </Button>
            <Button onClick={resetImage}>Reset</Button>
            <Button onClick={cancel}>Cancel</Button>
            <small>
              You can Scale, Move and/or rotate the image. Hold{" "}
              <strong>shift</strong> to maintain aspect while scaling
            </small>
          </>
        ) : (
          <FileButton handleFile={handleImage}>Add Image</FileButton>
        )}
      </Actions>
      {imageAdded && (
        <ImageTransform transformProps={imageState} onUpdate={onUpdate} />
      )}
    </PageTemplate>
  );
};
