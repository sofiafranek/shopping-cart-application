import { createGlobalStyle } from "styled-components";
import FONTS, { base } from "./fonts";
import COLORS from "./colors";
import TYPO from "./typography";

export default createGlobalStyle`

  :root {
    --gutter: 30px;
    --gutter-side: 15px;
  }

  ::selection {
    background: ${COLORS.lightBlue};
    color: ${COLORS.black};
    opacity: 1;
  }
  ::-moz-selection {
    background: ${COLORS.lightBlue};
    color: ${COLORS.black};
    opacity: 1;
  }

  html, body {
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: ${FONTS.gtAmerica.light};
    font-size: ${base}px;
    line-height: 26px;
    color: ${COLORS.black};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  a {
    position: relative;
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  h1 {
    ${TYPO.h1}
  }

  h2 {
    ${TYPO.h2}
  }

  h3 {
    ${TYPO.h3}
  }

  h4 {
    ${TYPO.h4}
  }

  h5 {
    ${TYPO.h5}
  }

  h6 {
    ${TYPO.h6}
  }

  p {
    ${TYPO.p}
    margin: 0;
  }

  small {
    ${TYPO.small}
  }

  button {
    ${TYPO.button}
    padding: 15px 20px;
    border-radius: 30px;
    border: 1px solid black;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      background-color: ${COLORS.black};
      color: ${COLORS.white};
    }
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  input {
    ${TYPO.h5}
    height: fit-content;

    :focus {
      outline: none;
    }
  }

  textarea {
    font-family: ${FONTS.gtAmerica.light};
  }
`;
