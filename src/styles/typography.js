import { css } from "styled-components";
import FONTS, { base } from "./fonts";
import BREAKPOINTS, { breakpointSizes } from "./breakpoints";

export const rem = (px) => `${px / base}rem`;

const { xsmall } = breakpointSizes;

export const fluidSize = (min, max) => {
  const scale = max - min;
  return `calc(${rem(min)} + ${scale} * ((100vw - ${xsmall}px) / 640))`;
};

export const styles = {
  h1: css`
    font-family: ${FONTS.canela.light};
    font-size: ${rem(45)};
    line-height: ${rem(55)};

    ${BREAKPOINTS.min.xsmall`
      font-size: ${fluidSize(40, 55)};
      line-height: ${fluidSize(55, 65)};
    `}

    ${BREAKPOINTS.min.large`
      font-size: ${rem(55)};
      line-height: ${rem(65)};
    `}
  `,
  h2: css`
    font-family: ${FONTS.canela.light};
    font-size: ${rem(35)};
    line-height: ${rem(45)};

    ${BREAKPOINTS.min.xsmall`
      font-size: ${fluidSize(35, 45)};
      line-height: ${fluidSize(40, 50)};
    `}

    ${BREAKPOINTS.min.large`
      font-size: ${rem(40)};
      line-height: ${rem(50)};
    `}
  `,
  h3: css`
    font-size: 7vw;
    line-height: 8vw;
    font-family: ${FONTS.canela.light};

    ${BREAKPOINTS.min.xxsmall`
      font-size: ${rem(29)};
      line-height: ${rem(35)};
    `}
  `,
  h4: css`
    font-size: ${rem(26)};
    line-height: ${rem(35)};
    font-family: ${FONTS.canela.light};
  `,
  h5: css`
    font-size: ${rem(17)};
    line-height: ${rem(20)};
    font-family: ${FONTS.canela.light};
  `,
  h6: css`
    font-size: 4.25vw;
    line-height: 6vw;

    ${BREAKPOINTS.min.xxsmall`
      font-size: ${rem(16)};
      line-height: ${rem(21)};
    `}

    ${BREAKPOINTS.min.xsmall`
      font-size: ${rem(14)};
      line-height: ${rem(20)};
    `}
  `,
  p: css`
    font-size: 4.25vw;
    line-height: 6vw;

    ${BREAKPOINTS.min.xxsmall`
      font-size: ${rem(16)};
      line-height: ${rem(21)};
    `}

    ${BREAKPOINTS.min.xsmall`
      font-size: ${rem(14)};
      line-height: ${rem(20)};
    `}
  `,
  xsmall: css`
    font-size: ${rem(12)};
    line-height: ${rem(18)};
  `,
  small: css`
    font-size: ${rem(14)};
    line-height: ${rem(20)};
  `,
  medium: css`
    font-size: ${rem(33)};
    line-height: ${rem(60)};
  `,
  large: css`
    font-size: ${rem(44)};
    line-height: ${rem(50)};
  `,
  button: css`
    font-size: ${rem(13)};
    line-height: ${rem(14)};
    letter-spacing: ${rem(1.18)};
    font-family: ${FONTS.graphik.medium};
    text-transform: uppercase;

    ${BREAKPOINTS.min.xsmall`
      font-size: ${rem(11)};
      line-height: ${rem(12)};
      letter-spacing: ${rem(1)};
    `}
  `
};

export default styles;
