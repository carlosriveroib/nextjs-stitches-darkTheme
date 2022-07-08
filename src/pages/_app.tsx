import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import { darkTheme, globalStyles } from '@styles';

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        dark: darkTheme.className,
        light: 'light',
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
