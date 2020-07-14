import React from "react";
import styled from "styled-components";
// @ts-ignore
import FreeTransform from "react-free-transform";

import { style } from "./styles";

interface TProps {
  transformProps: any;
  onUpdate: Function;
}

const Wrapper = styled.div`
  ${style}
`;

export const ImageTransform = ({ transformProps, onUpdate }: TProps) => {
  return (
    <Wrapper>
      <FreeTransform
        onUpdate={(payload: any) => onUpdate(payload)}
        {...transformProps}
      >
        <img
          className="element"
          style={{
            width: transformProps.width,
            height: transformProps.height,
            ...transformProps.styles,
          }}
          src={transformProps.src || "https://avatarmaker.net/images/1.png"}
          alt="Nothing"
        />
      </FreeTransform>
    </Wrapper>
  );
};
