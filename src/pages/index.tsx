import { css } from '@emotion/react';
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType
} from 'next';
import { Collection } from '../components/Collection';
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
export default function HomePage({
  data
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Meta
        title={data.meta_title}
        description={data.meta_description}
        cover={data.meta_cover.url}
      />

      {/* <p
        css={css`
          font-size: var(--scale-1);
          max-width: 36rem;
          line-height: 1.6;
          color: var(--color-grey-700);
          margin-bottom: var(--spacing-5);
        `}
      >
        Madeleine Ostoja is a film photographer based in Wellington, New
        Zealand. With a focus on the urban landscape, she captures people and
        how they relate to their environments.
      </p> */}

      <div css={styles.collections}>
        {data.collections.map(({ collection }: any) => {
          return (
            <Collection
              css={styles.collection}
              name={plaintext(collection.data.name)}
              images={collection.data.photos.map(
                ({ photo, photo_title }: any) => ({
                  alt: photo_title,
                  prismic: photo
                })
              )}
              href={resolveDocument(collection)}
            />
          );
        })}
      </div>
    </>
  );
}

/** Page data */
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  return {
    props: {
      data: await get('home', context, {
        fetchLinks: ['collection.name', 'collection.photos']
      }),
      preview: context.preview || null
    }
  };
};
