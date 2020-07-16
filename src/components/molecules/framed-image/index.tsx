import React from "react";
import styled from "styled-components";

import { FramedImage } from "../../../services/image";

interface TProps {
  framedImage: FramedImage;
}

const Wrapper = styled.div`
  padding: 0.5em;
  border-radius: 13px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 80vw;
  max-width: 300px;

  img {
    object-fit: "cover";
    border-radius: 10px;
    margin-bottom: 0.5em;
    width: 100%;
  }

  p {
    color: #ccc;
    text-align: end;
  }
`;

export const FramedImageItem = ({ framedImage }: TProps) => {
  return (
    <Wrapper className="framed-img-item" aria-label="framed-img-item">
      <img src={framedImage.imageUrl} alt="framed" />
      <p>{formatDate(framedImage.date)}</p>
    </Wrapper>
  );
};

const formatDate = (date: number) => {
  let now = Date.now();

  if (Math.abs(now - date) > 86400000)
    return new Date(date).toDateString().split(" ").slice(1, 3).join(" ");

  now /= 1000;
  date /= 1000;

  if (Math.abs(now - date) > 3600) {
    const hours = Math.floor(Math.abs(now - date) / 60 / 60);
    return `${hours} hr${hours > 1 ? "s" : ""} ago`;
  }

  if (Math.abs(now - date) > 60) {
    const mins = Math.floor(Math.abs(now - date) / 60);
    return `${mins} min${mins > 1 ? "s" : ""} ago`;
  }

  return "now";
};
