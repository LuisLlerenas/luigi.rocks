import { extendTheme } from '@chakra-ui/react';

const FONT =
  'JetBrains Mono, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;';

const colors = {
  brand: {
    lightBlue: '#8EC5FC',
    blue: '#0085FF',
    blueLight: '#06BDF9',
    black: '#303030',
    blackSecondary: '#1F1F1F',
    grey: '#B2B2B2',
    greyDarker: '#718096',
    white: '#F3F3F3',
    pink: '#FF9D9D',
    green: '#38FFAC',
    yellow: '#FFD335',
    whiteSecondary: '#DADADA',
    background: '#111618',
    heroBackground: '#0D1112',
  },
};

const fonts = {
  body: FONT,
  heading: FONT,
};

const fontSizes = {
  xss: '0.5rem',
  xsss: '0.25rem',
  '2xl': '40px',
  '4xl': '80px',
  '5xl': '96px',
};

const styles = {
  global: {
    body: {
      bg: '#111618',
    },
  },
};

export const theme = extendTheme({ colors, fonts, fontSizes, styles });
