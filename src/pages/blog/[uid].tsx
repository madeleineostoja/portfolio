import { GetStaticPaths, GetStaticProps } from 'next';
import { PrismicSlice } from '../../../@types/prismic';
import { Post } from '../../../@types/_generated/prismic';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Images } from '../../components/Images';
import { Meta } from '../../components/Meta';
import { getAll, getUid, plaintext, richtext } from '../../lib/prismic';

const styles = {};

/**
 * Post page
 */
export default function PostPage({ data }: { data: Post }) {
  return (
    <>
      <Meta
        title={`${plaintext(data.title)} — Blog`}
        description={data.summary}
        cover={data.feature_image.url}
      />
      <Header />

      <h1>{plaintext(data.title)}</h1>

      <article>
        {(data.body as PrismicSlice[])?.map(
          ({ primary, items, slice_type }) => {
            switch (slice_type) {
              case 'content':
                return (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: richtext(primary.content)
                    }}
                  />
                );

              case 'images':
                return <Images images={items.map(({ image }) => image)} />;
            }
          }
        )}
      </article>
      <Footer />
    </>
  );
}

/** Page generation */
export const getStaticPaths: GetStaticPaths = async (context) => {
  const documents = await getAll('post', context);

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
export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getUid('post', context.params?.uid as string, context);

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
