import { Colors, Theme } from './types';

const colors: Colors = {
  body: '#ABCDEF'
};

const lightTheme: Theme = {
  colors,
  background: {
    pageBackground: colors.body
  }
};

export default lightTheme;
