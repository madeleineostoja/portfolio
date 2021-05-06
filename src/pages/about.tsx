import { css } from '@emotion/react';
import { GetStaticProps } from 'next';
import { PrismicSlice } from '../../@types/prismic';
import { About } from '../../@types/_generated/prismic';
import { Anchor } from '../components/Anchor';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Images } from '../components/Images';
import { Img } from '../components/Img';
import { Meta } from '../components/Meta';
import { SectionHeader } from '../components/SectionHeader';
import { get, plaintext, richtext } from '../lib/prismic';
import { desktop, laptop, mobile, tablet } from '../styles/breakpoints';
import { contentGrid } from '../styles/mixins';

const articleLayout = css`
    grid-column: 1 / -1;
    @media (min-width: ${laptop}) {
      grid-column: 5 / 13;
    }
    @media (min-width: ${desktop}) {
      grid-column: 6 / 12;
    }
  `,
  styles = {
    header: css`
      ${articleLayout}
    `,
    sidebar: css`
      grid-column: 1/-1;
      height: 100%;
      @media (min-width: ${laptop}) {
        grid-column: 1 / 4;
      }
      @media (min-width: ${desktop}) {
        grid-column: 2 / 5;
      }
    `,
    image: css`
      margin: 0 0 var(--spacing-2);
      @media (min-width: ${mobile}) and (max-width: ${laptop}) {
        display: none;
      }
      @media (min-width: ${laptop}) {
        margin: calc(0px - var(--spacing-2)) 0 0;
        position: sticky;
        top: var(--grid-gap);
      }
    `,
    article: css`
      ${articleLayout}
      margin-top: -1em;
    `
  };

/**
 * About page
 */
export default function AboutPage({ data }: { data: About }) {
  return (
    <>
      <Meta title={data.meta_title} description={data.meta_description} />
      <Header />

      <section css={contentGrid}>
        <SectionHeader
          css={styles.header}
          large
          title={plaintext(data.title)}
          action={
            <Anchor href="mailto:madi@madeleineostoja.com">Get in touch</Anchor>
          }
        />
        <aside css={styles.sidebar}>
          <Img
            css={styles.image}
            prismic={data.image}
            alt="Photo of Madeleine Ostoja"
            sizes={`(min-width: ${tablet}) 33vw, 100vw`}
          />
        </aside>
        <article css={styles.article}>
          {(data.body as PrismicSlice[])?.map(
            ({ primary, items, slice_type }) => {
              switch (slice_type) {
                case 'rich_text':
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
      </section>
      <Footer />
    </>
  );
}

/** Page data */
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      data: await get('about', context),
      preview: context.preview || null
    }
  };
};
