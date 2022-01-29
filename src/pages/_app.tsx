import type { AppProps } from "next/app";
import { MyThemeProvider } from "../contexts/theme";
import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </MyThemeProvider>
  );
}

export default MyApp;
