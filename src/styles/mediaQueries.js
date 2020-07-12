import { css } from "styled-components";

export const MIN_DESKTOP = 900;

export const sizes = {
  minDesktop: `@media screen and (min-width: ${MIN_DESKTOP}px)`,
};

// Snippet sourced from: https://medium.com/@samuelresua/easy-media-queries-in-styled-components-690b78f50053
const screenSize = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    ${sizes[label]} {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export default screenSize;
