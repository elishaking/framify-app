import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;

  ul {
    display: flex;
    list-style: none;
    align-items: center;

    li {
      margin-right: 2em;
    }

    a {
      text-decoration: none;
    }
  }
`;

export const Header = () => {
  return (
    <Wrapper>
      <h1>Framify</h1>

      <ul>
        <li aria-label="home-link">
          <Link to="/">Home</Link>
        </li>
        <li aria-label="upload-link">
          <Link to="/upload">Upload</Link>
        </li>
      </ul>
    </Wrapper>
  );
};
