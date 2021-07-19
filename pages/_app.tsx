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
        <meta name="title" content="BLGN.dev — Portfolio" />
        <meta
          name="description"
          content="I'm a full-stack developer and a software engineer"
        />
        <meta
          name="keywords"
          content="portfolio, typescript, software, engineer, developer, backend, react, nodejs, github, nescabir, blgn"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Baptiste Boulongne" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blgn.dev/" />
        <meta property="og:title" content="BLGN.dev — Portfolio" />
        <meta
          property="og:description"
          content="I'm a full-stack developer and a software engineer"
        />
        <meta property="og:image" content="https://i.imgur.com/wuMJWZI.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://blgn.dev/" />
        <meta property="twitter:title" content="BLGN.dev — Portfolio" />
        <meta
          property="twitter:description"
          content="I'm a full-stack developer and a software engineer"
        />
        <meta
          property="twitter:image"
          content="https://i.imgur.com/wuMJWZI.png"
        />
        <meta name="theme-color" content="#ff7f00" />
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
