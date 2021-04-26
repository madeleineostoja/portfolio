import { css } from '@emotion/react';
import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext
} from 'next';
import { PrismicDocument, WithMeta } from '../../../@types/prismic';
import { Collection, Photo } from '../../../@types/_generated/prismic';
import { ReactComponent as PrevIcon } from '../../assets/icons/caret-left.svg';
import { ReactComponent as NextIcon } from '../../assets/icons/caret-right.svg';
import { Button } from '../../components/Button';
import { Img } from '../../components/Img';
import { Link } from '../../components/Link';
import { Meta } from '../../components/Meta';
import { getAll, getUid, resolveDocument } from '../../lib/prismic';
import { laptop, tablet } from '../../styles/breakpoints';
import { contentGrid } from '../../styles/mixins';
import { heading1 } from '../../styles/typesets';

const styles = {
  page: css`
    ${contentGrid}
    grid-auto-flow: dense;
    min-height: calc(100vh - var(--spacing-3) - var(--spacing-3));
    grid-template-rows: auto 1fr;
  `,
  header: css`
    grid-column: 1 / -1;
    margin-bottom: var(--spacing-3);
    text-align: right;
  `,
  frame: css`
    display: flex;
    flex-direction: column;
    grid-column: 1 / -1;
    justify-content: space-between;
    @media (min-width: ${tablet}) {
      grid-column: 1 / 8;
    }
    @media (min-width: ${laptop}) {
      grid-column-start: 2;
    }
  `,
  photo: css`
    text-align: center;
    & img {
      display: inline-block;
      max-height: 100%;
    }
    @media (min-width: ${tablet}) {
      max-height: 71vh;
    }
  `,
  details: css`
    grid-column: 1 / -1;
    margin-bottom: var(--spacing-2);
    @media (min-width: ${tablet}) {
      grid-column: 9 / -1;
    }
    @media (min-width: ${laptop}) {
      grid-column-end: 12;
    }
  `,
  description: css`
    color: var(--color-text-secondary);
  `,
  nav: css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: var(--spacing-3);
  `,
  navIcon: css`
    fill: currentColor;
    height: var(--scale-1);
    width: var(--scale-1);
    cursor: pointer;
  `
};

/**
 * Photo page
 */
export default function PhotoPage({
  data,
  collection
}: {
  data: WithMeta<Photo>;
  collection: PrismicDocument<Collection>;
}) {
  if (!data || !collection) {
    return null;
  }

  const { photos } = collection.data,
    /** @ts-ignore */
    current = photos?.findIndex(({ photo }) => photo?.uid === data.uid);

  return (
    <>
      <Meta
        title={data.title}
        description={`${data.title}, captured on ${data.film} with the ${data.camera} by Madeleine Ostoja`}
        cover={data.photo.url}
      />

      <div css={styles.page}>
        <header css={styles.header}>
          <Button href={resolveDocument(collection)}>Collection</Button>
        </header>

        <div css={styles.details}>
          <h1 css={heading1}>{data.title}</h1>
          <p
            css={styles.description}
          >{`Shot on ${data.film}, with the ${data.camera}`}</p>
        </div>
        <div css={styles.frame}>
          <div css={styles.photo}>
            <Img
              sizes={`(max-width: ${tablet}) 100vw, 50vw`}
              prismic={data.photo}
              key={data.photo.uid}
            />
          </div>

          <nav css={styles.nav}>
            {current! > 0 ? (
              <Link href={resolveDocument(photos![current! - 1]?.photo)}>
                <PrevIcon css={styles.navIcon} />
              </Link>
            ) : (
              <div />
            )}
            {current! < photos!.length ? (
              <Link href={resolveDocument(photos![current! + 1]?.photo)}>
                <NextIcon css={styles.navIcon} />
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </div>
      </div>
    </>
  );
}

/** Page generation */
export const getStaticPaths: GetStaticPaths = async (
  context: GetStaticPathsContext
) => {
  const documents = await getAll('photo', context);

  return {
    paths: documents.map(({ uid }: any) => ({
      params: {
        uid
      }
    })),
    fallback: true
  };
};

/** Page data */
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const data = await getUid('photo', context.params?.uid as string, context),
    collections = await getAll('collection', context),
    collection = collections.find(({ data: doc }: any) => {
      return doc.photos.some(({ photo }: any) => photo.uid === data.uid);
    });

  return !!data
    ? {
        props: {
          data,
          collection,
          preview: context.preview || null
        }
      }
    : {
        notFound: true
      };
};
