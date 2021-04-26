import { css } from '@emotion/react';
import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext
} from 'next';
import { Collection } from '../../../@types/_generated/prismic';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Img } from '../../components/Img';
import { Link } from '../../components/Link';
import { Meta } from '../../components/Meta';
import { SectionHeader } from '../../components/SectionHeader';
import { getAll, getUid, plaintext, resolveDocument } from '../../lib/prismic';
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
  images: css`
    columns: 1;
    column-gap: var(--grid-gap);
    @media (min-width: ${mobile}) {
      columns: 2;
    }
    @media (min-width: ${tablet}) {
      columns: 3;
    }
  `,
  image: css`
    display: inline-block;
    padding-bottom: var(--grid-gap);
    /* HACK because CSS */
    margin-bottom: -4px;
  `
};

/**
 * Collection page
 */
export default function CollectionPage({ data }: { data: Collection }) {
  if (!data) {
    return null;
  }

  return (
    <>
      <Meta
        title={data.meta_title}
        description={data.meta_description}
        cover={data.meta_cover.url}
      />

      <Header />

      <div css={styles.wrapper}>
        <section css={styles.gallery}>
          <SectionHeader
            title={plaintext(data.name)}
            large
            action={
              <Button back href="/">
                Back
              </Button>
            }
          />
          <div css={styles.images}>
            {data.photos?.map(({ photo }: any) => (
              <Link
                href={resolveDocument(photo)}
                css={styles.image}
                key={photo.uid}
              >
                <Img
                  prismic={photo.data.photo}
                  alt={photo.data.title}
                  sizes={`(max-width: ${mobile}) 100vw, (max-width: ${tablet}) 50vw, 33vw`}
                />
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
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
    context,
    { fetchLinks: ['photo.photo', 'photo.title'] }
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
