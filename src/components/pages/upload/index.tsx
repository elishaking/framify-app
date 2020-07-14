import React, { useState } from "react";

import { PageTemplate } from "../../templates";
import { ImageTransform } from "../../organisms";

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

  const onUpdate = (payload: any) => {
    updateImageState({
      ...imageState,
      ...payload,
    });
  };

  return (
    <PageTemplate>
      <ImageTransform transformProps={imageState} onUpdate={onUpdate} />
    </PageTemplate>
  );
};
