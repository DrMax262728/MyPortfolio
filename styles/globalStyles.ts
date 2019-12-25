import { createGlobalStyle, css } from "styled-components";
// css
import normalize from "normalize.css";
// themes
import colors from "styles/colors";

const libsStyles = css`
  ${normalize};
`;

const GlobalStyles = createGlobalStyle`
  ${libsStyles};

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    background-color: ${colors.purple700};
  }
  
  h1, h2, h3 {
    padding: 0;
    margin: 0;
    border: 0;
  }

`;

export default GlobalStyles;
