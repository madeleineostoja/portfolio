import { css } from '@emotion/react';
import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType
} from 'next';
import { useState } from 'react';
import { ReactComponent as CaretIcon } from '../../assets/icons/caret-left.svg';
import { Img } from '../../components/Img';
import { Lightbox } from '../../components/Lightbox';
import { Link } from '../../components/Link';
import { Meta } from '../../components/Meta';
import { SectionHeader } from '../../components/SectionHeader';
import { getAll, getUid, plaintext } from '../../lib/prismic';
import { desktop, mobile, tablet } from '../../styles/breakpoints';

const styles = {
  wrapper: css`
    display: grid;
    grid-template-columns: var(--grid-content);
  `,
  gallery: css`
    grid-column: 1 / -1;
    @media (min-width: ${desktop}) {
      grid-column: 2 / span 10;
    }
  `,
  backButton: css`
    display: inine-flex;
    align-items: center;
    font-size: var(--scale-00);
    padding: 3px 1em;
    line-height: 1;
    border-radius: var(--radius-round);
    background: var(--color-grey-100);
    color: var(--color-grey-700);
  `,
  backIcon: css`
    fill: currentColor;
    height: 0.625em;
    width: 0.625em;
    margin-right: 0.3em;
  `,
  images: css`
    columns: 1;
    column-gap: var(--spacing-1);
    @media (min-width: ${mobile}) {
      columns: 2;
    }
    @media (min-width: ${tablet}) {
      columns: 3;
    }
  `,
  image: css`
    display: inline-block;
    padding-bottom: var(--spacing-1);
    /* HACK because CSS */
    margin-bottom: -4px;
    & img {
      cursor: zoom-in;
    }
  `
};

/**
 * Collection page
 */
export default function CollectionPage({
  data
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [lightbox, setLightbox] = useState({
    open: false,
    selected: 0
  });

  if (!data) {
    return null;
  }

  return (
    <>
      <Meta
        title={data.meta_title}
        description={data.meta_description}
        cover={data.photos[0].photo.url}
      />
      <div css={styles.wrapper}>
        <section css={styles.gallery}>
          <SectionHeader
            title={plaintext(data.name)}
            action={
              <Link css={styles.backButton} href="/">
                <CaretIcon css={styles.backIcon} />
                Back
              </Link>
            }
          />
          <div css={styles.images}>
            {data.photos.map(({ photo, photo_title }: any, i: number) => (
              <div css={styles.image}>
                <Img
                  onClick={() => setLightbox({ open: true, selected: i })}
                  prismic={photo}
                  alt={photo_title}
                  sizes={`(max-width: ${mobile}) 100vw, (max-width: ${tablet}) 50vw, 33vw`}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      <Lightbox
        open={lightbox.open}
        onClose={() => setLightbox({ ...lightbox, open: false })}
        selected={lightbox.selected}
        images={data.photos.map(({ photo, photo_title }: any) => ({
          image: photo,
          title: photo_title
        }))}
      />
    </>
  );
}

/** Page generation */
export const getStaticPaths: GetStaticPaths = async (
  context: GetStaticPathsContext
) => {
  const documents = await getAll('collection', context);

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
  const data = await getUid(
    'collection',
    context.params?.uid as string,
    context
  );

  return !!data
    ? {
        props: {
          data,
          preview: context.preview || null
        }
      }
    : {
        notFound: true
      };
};
