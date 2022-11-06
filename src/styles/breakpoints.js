import { css } from "styled-components";

export const breakpointSizes = {
  xxsmall: 414,
  xsmall: 640,
  small: 768,
  medium: 1024,
  large: 1280,
  xlarge: 1600
};

const breakpoints = { min: {}, max: {} };

const query =
  (size, direction = "max") =>
  (content, ...args) =>
    css`
      @media screen and (${direction}-width: ${size}px) {
        ${css(content, ...args)}
      }
    `;

Object.keys(breakpointSizes).forEach((key) => {
  breakpoints[key] = query(breakpointSizes[key]);
  breakpoints.min[key] = query(breakpointSizes[key], "min");
  breakpoints.max[key] = query(breakpointSizes[key], "max");
});

breakpoints.custom = query;

export default breakpoints;
