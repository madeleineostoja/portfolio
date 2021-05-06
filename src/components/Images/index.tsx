import { css } from '@emotion/react';
import Gallery from 'react-photo-gallery';
import { flexGrid } from 'satchel-css';
import { useBreakpoint } from '../../lib/hooks';
import { tablet } from '../../styles/breakpoints';
import { generateSrcSet, Img, ImgProps } from '../Img';

export type ImagesProps = {
  /** Images */
  images: ImgProps['prismic'][];
};

const styles = {
  images: css`
    margin: var(--spacing-2) 0;
  `,
  image: css`
    width: 50%;
  `
};

/**
 * Collection of images for articles
 */
export function Images({ images, ...props }: ImagesProps) {
  const isDesktop = useBreakpoint(`(min-width: ${tablet})`);

  return (
    <div css={styles.images}>
      <Gallery
        margin={isDesktop ? 4 : 8}
        photos={
          images.map(({ dimensions, url }) => ({
            src: url,
            srcset: generateSrcSet(url),
            sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
            height: dimensions?.height,
            width: dimensions?.width
          })) as any
        }
        {...props}
      />
    </div>
  );
}
