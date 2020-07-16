import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { PageTemplate } from "../../templates";
import { Button } from "../../atoms";

import { fetchImages, FramedImage } from "../../../services/image";
import { FramedImageList } from "../../organisms";

export const HomePage = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<FramedImage[]>([]);

  useEffect(() => {
    fetchImages()
      .then((res) => {
        setImages(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <PageTemplate>
        <p>Loading...</p>
      </PageTemplate>
    );
  // TODO: move this condition into <FramedImageList />
  if (images.length === 0)
    return (
      <PageTemplate>
        <h3>
          <span role="img" aria-label="no images">
            🦏
          </span>{" "}
          You have not published any images
        </h3>
        <Button onClick={() => history.push("/upload")}>Add</Button>
      </PageTemplate>
    );

  return (
    <PageTemplate>
      <FramedImageList framedImages={images.reverse()} />
    </PageTemplate>
  );
};
