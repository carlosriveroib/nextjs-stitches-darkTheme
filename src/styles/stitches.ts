import { createStitches, defaultThemeMap } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export const { createTheme, config, css, getCssText, globalCss, keyframes, styled, theme } =
  createStitches({
    theme: {
      fonts: {
        akzidenz: 'Akzidenz',
        rudeWide: 'RudeWide',
      },
      colors: {
        primary: '#22222b',
        secondary: '#2d2d39',
        accents800: '#43434d',
        accents700: '#62626d',
        accents600: '#777681',
        accents500: '#a09fab',
        accents400: '#bfbeca',
        accents300: '#e1e1ed',
        accents200: '#efeefb',
        accents100: '#f5f4ff',
        accents50: '#faf9ff',
        white: '#ffffff',
        cyan: '#0097a7',
        green: '#388e3c',
        red: '#d81d2c',
        orange: '#ea6308',
        yellow: '#f3c95d',
        pink: '#e9b4bc',

        background: '$white',
        text: '$primary',
      },
      fontSizes: {
        12: '0.75rem',
        14: '0.875rem',
        16: '1rem',
        18: '1.125rem',
        20: '1.25rem',
        24: '1.5rem',
        36: '2.25rem',
        44: '2.75rem',
        52: '3.25rem',
        56: '3.5rem',
      },
      fontWeights: {
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
      },
      radii: {
        2: '2px',
        8: '8px',
        button: '100px',
        round: '50%',
      },
      space: {},
      transitions: {
        default: 'all 250ms ease',
      },
      zIndices: {
        1: 100,
        2: 200,
        3: 300,
        4: 400,
        max: 99999,
      },
    },
    media: {
      bp1: '(min-width: 520px)',
      bp2: '(min-width: 900px)',
      bp3: '(min-width: 1200px)',
      bp4: '(min-width: 1441px)',
      bp5: '(min-width: 1920px)',
      dark: '(prefers-color-scheme: dark)',
      motion: '(prefers-reduced-motion)',
    },
    themeMap: {
      ...defaultThemeMap,
    },
    utils: {
      bgAlpha: ([value, alpha]: [string, number]) => {
        if (value.startsWith('$')) {
          value =
            config.theme.colors[value.slice(1) as keyof typeof config['theme']['colors']].slice(1);
        } else if (value.startsWith('#')) {
          value = value.slice(1);
        }

        const [r, g, b] = value.match(/.{1,2}/g)?.map((x) => parseInt(x, 16)) as number[];

        return {
          backgroundColor: `rgba(${r}, ${g}, ${b}, ${alpha})`,
        };
      },
      dFlex: (value: Stitches.PropertyValue<'alignItems'>) => ({
        display: 'flex',
        alignItems: value,
        justifyContent: value,
      }),
      mX: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      mY: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
        marginBottom: value,
      }),
      pX: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      pY: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
    },
  });
