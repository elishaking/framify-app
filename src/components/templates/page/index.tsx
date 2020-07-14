import React from "react";
import styled from "styled-components";

import { Header } from "../../organisms";

interface TProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 3em 3em 0 3em;
  max-width: 1300px;
  margin: auto;
`;

const Footer = styled.footer`
  margin-top: auto;
  padding-bottom: 0.1em;
  text-align: center;
`;

export const PageTemplate = ({ children }: TProps) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer>
        <small>Copyright 2020</small>
      </Footer>
    </Wrapper>
  );
};
