import { extendTheme } from '@chakra-ui/react';

const fonts = {
  heading: 'Shantell Sans, monospace',
  displayFitted: 'Turret Road, cursive',
  displayDotted: 'Raleway Dots, cursive',
  text: '',
}

const colors = {

  /** 
   * source(s)
   * - base01: https://www.happyhues.co/palettes/13
   * - base02: https://www.happyhues.co/palettes/4
   * - schemes: https://themera.vercel.app/
   */

  /* heart-felt colors */

  background: '#0f0e17',
  heading: '#fffffe',
  text: '#a7a9be',
  focus: '#e53170', // RED; use when user is personally involved
  highlight: '#2cb67d', // GREEN; default actions color (e.g. buttons)
  purple: '#7f5af0', // todo: make lighter

  /* schemes */

  focusScheme: {
    '50': '#FCE8EF',
    '100': '#F7C0D3',
    '200': '#F297B7',
    '300': '#ED6E9A',
    '400': '#E8457E',
    '500': '#E21D62',
    '600': '#B5174E',
    '700': '#88113B',
    '800': '#5B0B27',
    '900': '#2D0614'
  },
  highlightScheme: {
    '50': '#EAFAF4',
    '100': '#C6F1DF',
    '200': '#A1E8CB',
    '300': '#7CDFB6',
    '400': '#57D6A2',
    '500': '#32CD8D',
    '600': '#28A471',
    '700': '#1E7B55',
    '800': '#145238',
    '900': '#0A291C'
  },
  purples: {
    '50': '#EDE8FD',
    '100': '#CCBEF9',
    '200': '#AC93F5',
    '300': '#8B69F1',
    '400': '#6A3FEE',
    '500': '#4A15EA',
    '600': '#3B11BB',
    '700': '#2C0D8C',
    '800': '#1D085E',
    '900': '#0F042F'
  }

}

const styles = {
  'html': {
    'bg': 'background',
    'color': 'text',
  }
}

const components = {
  Button: {
    baseStyle: {
      // borderRadius: 'full',
      fontWeight: 'normal',
      _focus: {
        boxShadow: 'none',
      },
      colorScheme: 'greens'
    },
    variants: {
    }
  }
}

export const theme = extendTheme({
  fonts,
  colors,
  styles,
  components,
});
