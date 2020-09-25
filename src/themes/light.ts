import { Colors, Theme } from './types';

const colors: Colors = {
  body: '#FBFBFB',

  grey: {
    white: '#FFFFFF',
    0x0F: '#F0F0F0',
    0x0E: '#E0E0E0',
    0x0D: '#D0D0D0',
    0x0C: '#C0C0C0',
    0x0B: '#B0B0B0',
    0x0A: '#A0A0A0',
    0x09: '#909090',
    0x08: '#808080',
    0x07: '#707070',
    0x06: '#606060',
    0x05: '#505050',
    0x04: '#404040',
    0x03: '#303030',
    0x02: '#202020',
    0x01: '#101010',
    black: '#000000',
  },

  darkRed: '#8B0000',

  primary: {
    lighter: '#A9B3D4',
    light: '#7497BA',
    normal: '#446688',
  },

  secondary: {
    light: '#F0F0F0',
    normal: '#E0E0E0',
  },
};

const lightTheme: Theme = {
  colors,
  content: {
    pageBackground: colors.body,
    text: {
      light: colors.grey[0x09],
      normal: colors.grey.black
    },
    border: colors.grey[0x0D]
  },
  menu: {
    text: colors.primary.normal,
    border: colors.grey[0x0D],
    optionBackground: colors.secondary.light,
    activeOptionBackground: colors.secondary.normal,
  },
};

export default lightTheme;
