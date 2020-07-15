import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { PageTemplate } from "../../templates";
import { Button } from "../../atoms";

import { fetchImages, FramedImage } from "../../../services/image";

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

  if (images.length === 0)
    return (
      <PageTemplate>
        <h3>You have not made any uploads</h3>
        <Button onClick={() => history.push("/upload")}>Upload</Button>
      </PageTemplate>
    );

  return (
    <PageTemplate>
      {images.map((image: any) => {
        return <div key={image.id}>{image.date}</div>;
      })}
    </PageTemplate>
  );
};
