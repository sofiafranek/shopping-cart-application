import { css } from 'styled-components';

export const loadFonts = css`
  @font-face {
    font-family: 'Canela-Light';
    src: url('/fonts/canela/canela-light.woff2') format('woff2'),
      url('/fonts/canela/canela-light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Canela-Regular';
    src: url('/fonts/canela/canela-regular.woff2') format('woff2'),
      url('/fonts/canela/canela-regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Canela-Bold';
    src: url('/fonts/canela/canela-bold.woff2') format('woff2'),
      url('/fonts/canela/canela-bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Graphik-Medium';
    src: url('/fonts/graphik/graphik-medium.woff2') format('woff2'),
      url('/fonts/graphik/graphik-medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'GT-America-Light';
    src: url('/fonts/gt-america/gt-america-standard-light.woff2')
        format('woff2'),
      url('/fonts/gt-america/gt-america-standard-light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'GT-America-Medium';
    src: url('/fonts/gt-america/gt-america-standard-medium.woff2')
        format('woff2'),
      url('/fonts/gt-america/gt-america-standard-medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'GT-America-Bold';
    src: url('/fonts/gt-america/gt-america-standard-bold.woff2') format('woff2'),
      url('/fonts/gt-america/gt-america-standard-bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }
`;

export const base = 16;

export default {
  canela: {
    light: 'Canela-Light, sans-serif',
    regular: 'Canela-Regular, sans-serif',
    bold: 'Canela-Bold, sans-serif',
  },

  graphik: {
    medium: 'Graphik-Medium, sans-serif',
  },

  gtAmerica: {
    light: 'GT-America-Light, sans-serif',
    medium: 'GT-America-Medium, sans-serif',
    bold: 'GT-America-Bold, sans-serif',
  },
};
