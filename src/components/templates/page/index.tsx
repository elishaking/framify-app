import React from "react";
import styled from "styled-components";

interface TProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Footer = styled.footer`
  margin-top: auto;
`;

export const PageTemplate = ({ children }: TProps) => {
  return (
    <Wrapper>
      {children}
      <Footer>Copyright 2020</Footer>
    </Wrapper>
  );
};
