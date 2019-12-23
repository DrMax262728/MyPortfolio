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
    background-color: ${colors.purple800};
  }

`;

export default GlobalStyles;
