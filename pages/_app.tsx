import "styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import styles from "styles/App.module.scss";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import Header from "components/Header";
import Footer from "components/Footer";

function BLGN({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ff7f00",
      },
      secondary: {
        main: "#0077ff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>BLGN.dev — Portfolio</title>
        {/* <script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer></script> */}
      </Head>
      <div className={styles.App}>
        <Header />
        <div className={styles.app_wrapper}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
export default BLGN;
