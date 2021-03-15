import { css, Global } from '@emotion/react';
import { DefaultSeo } from 'next-seo';
import NextApp, { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import 'pollen-css';
import { shimmie } from 'pollen-css/utils';
import { useEffect } from 'react';
import { GlobalData } from '../lib/GlobalData';
import globalStyles from '../styles';

const styles = {
  main: css`
    display: grid;
    position: relative;
    min-height: 100vh;
    grid-template-columns: var(--grid-page);
    align-items: start;
    & > * {
      grid-column: 2 / 3;
    }
  `
};

function App({ Component, pageProps }: AppProps & any) {
  useEffect(() => {
    shimmie();
  }, []);

  return (
    <>
      <Global styles={globalStyles} />

      {/* Meta */}
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icon.png" />
      </Head>

      <DefaultSeo
        titleTemplate="%s"
        openGraph={{
          type: 'website',
          locale: 'en',
          url: 'https://madeleineostoja.com',
          site_name: 'Madeleine Ostoja'
        }}
      />

      <GlobalData.Provider value={{}}>
        <main css={styles.main}>
          <Component {...pageProps} />
        </main>
      </GlobalData.Provider>
    </>
  );
}

// Should be getStaticProps, but not supported in _app yet
// See https://github.com/vercel/next.js/discussions/10949
App.getInitialProps = async (appContext: AppContext) => {
  return {
    ...(await NextApp.getInitialProps(appContext))
  };
};

export default App;
