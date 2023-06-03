import { extendTheme } from '@chakra-ui/react';

const fonts = {

}

const colors = {

  /* heart-felt colors */

  background: '#16161a',
  heading: '#fffffe',
  text: '#94a1b2',
  action: '#2cb67d', // green
  highlight: '#7f5af0', // purple

  /* schemes */

  actionScheme: {
    50: '#effaf5',
    100: '#c0e9d8',
    200: '#86d5b5',
    300: '#39bb85',
    400: '#29a873',
    500: '#228e61',
    600: '#1d7852',
    700: '#176042',
    800: '#145138',
    900: '#0e3b28'
  },
  highlightScheme: {
    50: '#f8f6fe',
    100: '#e4dcfc',
    200: '#ccbdf9',
    300: '#af97f6',
    400: '#9e82f4',
    500: '#8663f1',
    600: '#7150d6',
    700: '#5b41ac',
    800: '#4d3792',
    900: '#382869'
  }
}

const styles = {

}

const components = {

}

export const theme = extendTheme({
  fonts,
  colors,
  styles,
  components,
});
