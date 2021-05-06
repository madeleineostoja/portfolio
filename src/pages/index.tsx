import { css } from '@emotion/react';
import { GetStaticProps } from 'next';
import { WithMeta } from '../../@types/prismic';
import { Home, Photo } from '../../@types/_generated/prismic';
import { Collection } from '../components/Collection';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Meta } from '../components/Meta';
import { get, plaintext, resolveDocument } from '../lib/prismic';
import { mobile } from '../styles/breakpoints';
import { subPageGrid } from '../styles/mixins';

const styles = {
  collections: css`
    ${subPageGrid}
  `,
  collection: css`
    &:not(:last-of-type) {
      margin-bottom: var(--spacing-4);
      @media (min-width: ${mobile}) {
        margin-bottom: var(--spacing-5);
      }
    }
  `
};

/**
 * Home page
 */
export default function HomePage({ data }: { data: Home }) {
  return (
    <>
      <Meta
        title={data.meta_title}
        description={data.meta_description}
        cover={data.meta_cover.url}
      />

      <Header />

      <div css={styles.collections}>
        {data.collections?.map(({ collection }: any) => {
          return (
            <Collection
              css={styles.collection}
              name={plaintext(collection.data.name)}
              photos={collection.data.photos?.map(
                ({ photo }: any) => photo.data
              )}
              href={resolveDocument(collection)}
              key={collection.uid}
            />
          );
        })}
      </div>

      <Footer />
    </>
  );
}

/** Page data */
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      data: await get('home', context, {
        fetchLinks: [
          'collection.name',
          'collection.photos',
          'photo.photo',
          'photo.title',
          'photo.uid'
        ]
      }),
      preview: context.preview || null
    }
  };
};
