import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { GlobalStyles } from "../theme/globals.styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
