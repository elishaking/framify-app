import React from "react";
import styled from "styled-components";

import { Button } from "../../atoms";

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    list-style: none;
    align-items: center;

    li {
      margin-right: 2em;
    }
  }
`;

export const Header = () => {
  return (
    <Wrapper>
      <h1>Framify</h1>

      <ul>
        <li>Home</li>
        <Button>Upload</Button>
      </ul>
    </Wrapper>
  );
};
