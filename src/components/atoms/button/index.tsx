import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode; // children required
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  padding: 0.7em 1.3em;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 3px;
  width: fit-content;
  min-width: 10em;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    pointer-events: none;
    background-color: #ccc;
  }
`;
