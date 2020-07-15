import React from "react";
import styled from "styled-components";

import { FramedImageItem } from "../../molecules";

import { FramedImage } from "../../../services/image";

interface TProps {
  framedImages: FramedImage[];
}

const Wrapper = styled.div`
  padding: 0.5em;
  display: flex;
  flex-wrap: wrap;

  .framed-img-item {
    margin: 1em;
  }
`;

export const FramedImageList = ({ framedImages }: TProps) => {
  return (
    <Wrapper>
      {framedImages.map((framedImage) => {
        return <FramedImageItem framedImage={framedImage} />;
      })}
    </Wrapper>
  );
};