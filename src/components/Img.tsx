import { css } from '@emotion/react';
import 'lazysizes';
import 'lazysizes/plugins/blur-up/ls.blur-up';
import { HTMLProps, LegacyRef } from 'react';
import Imgix from 'react-imgix';

export type PrismicImg = {
  url: string;
  dimensions?: { height: number; width: number };
};

export type ImgProps = Partial<Imgix['props']> &
  Partial<HTMLProps<HTMLImageElement>> & {
    prismic: PrismicImg;
    ref?: LegacyRef<Imgix> | undefined;
  };

/**
 * Responsive, lazy-loaded image component
 */
export function Img({
  prismic,
  alt = '',
  height,
  width,
  sizes,
  className,
  onClick,
  ...props
}: ImgProps) {
  const src = prismic?.url.split(/[?#]/)[0];

  return (
    <Imgix
      className={`lazyload blur-up ${className}`}
      css={css`
        &:global(.blur-up) {
          -webkit-filter: blur(5px);
          filter: blur(5px);
          transition: filter 400ms, -webkit-filter 400ms;
        }

        &:global(.blur-up.lazyloaded) {
          -webkit-filter: blur(0);
          filter: blur(0);
        }
      `}
      src={src || ''}
      sizes={sizes}
      attributeConfig={{
        src: 'data-src',
        srcSet: 'data-srcset',
        sizes: 'data-sizes'
      }}
      htmlAttributes={{
        src: `${src}?w=0.5&blur=200&px=16&auto=format&colorquant=150`,
        loading: 'lazy',
        alt,
        onClick
      }}
      {...props}
    />
  );
}
