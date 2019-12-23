import { createGlobalStyle, css } from "styled-components";
import normalize from "normalize.css";

const libsStyles = css`
  ${normalize};
`;

const GlobalStyles = createGlobalStyle`
  ${libsStyles};

  body {
    background-color: darkolivegreen;
  }

`;

export default GlobalStyles;
