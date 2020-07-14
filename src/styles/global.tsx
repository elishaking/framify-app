import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{ 
      margin: 0;
      padding: 0;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      -webkit-font-smoothing: antialiased;
      text-rendering: geometricPrecision;
      font-size: 1.3em;
  }

  * { 
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
