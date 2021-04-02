import { css } from '@emotion/react';
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType
} from 'next';
import { Collection } from '../components/Collection';
import { Meta } from '../components/Meta';
import { get, plaintext, resolveDocument } from '../lib/prismic';
import { subPageGrid } from '../styles/mixins';

const styles = {
  collections: css`
    ${subPageGrid}
  `,
  collection: css`
    margin-bottom: var(--spacing-5);
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
