import { darkTheme } from './darkTheme';
import { fonts } from './fonts';
import { globalCss } from './stitches';

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  html: {
    fontSize: '$16',
    scrollBehavior: 'smooth',
  },
  'body, a, h1, h2,h3,h4,h5,h6,p,ul,ol,li,fieldset,figure,figcaption, form, blockquote, dl, dd, dt, div, pre, span, label, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, footer, header, hgroup, menu, nav, section, audio, video':
    {
      padding: 0,
      margin: 0,
    },
  body: {
    backgroundColor: '$background',
    fontFamily: '$akzidenz',
    minHeight: '100vh',
    textRendering: 'optimizeSpeed',
  },
  'ul, ol': {
    listStyle: 'none',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  'input, button, textarea, select': {
    font: 'inherit',
  },
  '@font-face': [...fonts],
  '@motion': {
    '*': {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.01ms !important',
      scrollBehavior: 'auto !important',
    },
  },
  '@dark': {
    ':root:not(.light)': {
      ...Object.keys(darkTheme.colors).reduce((reduced, key) => {
        const color = darkTheme.colors[key as keyof typeof darkTheme.colors];

        return {
          ...reduced,
          [color.variable]: color.value.startsWith('$') ? `$colors${color.value}` : color.value,
        };
      }, {}),
    },
  },
});
