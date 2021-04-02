import { css, Global } from '@emotion/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';
import 'pollen-css';
import 'react-medium-image-zoom/dist/styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'typeface-inter';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import globalStyles from '../styles';
import { pageGrid } from '../styles/mixins';

const styles = {
  main: css`
    ${pageGrid}
    padding-top: var(--spacing-3);
    overflow: hidden;
  `
};

function App({ Component, pageProps }: AppProps & any) {
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

      <main css={styles.main}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}

export default App;
