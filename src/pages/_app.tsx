import { css, Global } from '@emotion/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import 'pollen-css';
import { useEffect } from 'react';
import 'react-medium-image-zoom/dist/styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'typeface-inter';
import { pageview } from '../lib/gtag';
import globalStyles from '../styles';
import { pageGrid } from '../styles/mixins';

const styles = {
  main: css`
    ${pageGrid}
    padding: var(--spacing-3) 0;
    overflow: hidden;
    min-height: 100vh;
    grid-auto-rows: min-content;
  `
};

export default function App({ Component, pageProps }: AppProps & any) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', (url: URL) => pageview(url));
  }, [router.events]);
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
        <Component {...pageProps} />
      </main>
    </>
  );
}
