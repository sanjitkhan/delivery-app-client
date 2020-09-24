import { Colors, Theme } from './types';

const colors: Colors = {
  body: '#FBFBFB',
  
  primary: '#446688',
  secondary: '#E0E0E0',
  secondaryLight: '#F0F0F0',

  grey: '#D0D0D0',
  black: '#000000'
};

const lightTheme: Theme = {
  colors,
  content: {
    pageBackground: colors.body,
    text: colors.black
  },
  menu: {
    text: colors.primary,
    border: colors.grey,
    optionBackground: colors.secondaryLight,
    activeOptionBackground: colors.secondary
  }
};

export default lightTheme;
