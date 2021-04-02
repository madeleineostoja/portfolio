import { css, Global } from '@emotion/react';
import { Overlay } from 'react-portal-overlay';
import { Img, ImgProps, PrismicImg } from '../Img';
import { Carousel } from 'react-responsive-carousel';
import { pageGrid } from '../../styles/mixins';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import { ReactComponent as PrevIcon } from '../../assets/icons/caret-left.svg';
import { ReactComponent as NextIcon } from '../../assets/icons/caret-right.svg';

type Image = {
  image: PrismicImg;
  title: string;
};

export type LightboxProps = {
  /** Whether lightbox is open */
  open: boolean;
  /** Array of images */
  images: Image[];
  /** Number of the active image in the gallery */
  selected: number;
  /** Callback for when lightbox closes */
  onClose(): void;
};

const styles = {
  wrapper: css`
    ${pageGrid}
    position: relative;
    align-items: center;
    background: white;
  `,
  slide: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-3);
    height: 100vh;
  `,
  image: css`
    width: auto !important;
    max-height: calc(100% - 60px);
  `,
  title: css`
    font-size: var(--scale-1);
    text-align: center;
    margin-top: var(--spacing-1);
  `,
  icon: css`
    position: absolute;
    fill: currentColor;
    height: var(--scale-1);
    width: var(--scale-1);
    cursor: pointer;
    z-index: var(--layer-1);
  `,
  close: css`
    top: var(--spacing-3);
    right: 0;
  `,
  nav: css`
    top: 50%;
    transform: translateY(-50%);
  `
};

/**
 * Gallery of images in a lightbox overlay
 */
export function Lightbox({
  open,
  images,
  onClose,
  selected,
  ...props
}: LightboxProps) {
  return (
    <>
      <Global
        styles={css`
          .carousel .control-dots,
          .carousel .carousel-status {
            display: none !important;
          }
        `}
      />

      <Overlay
        defaultPortalStyles={{
          zIndex: 'var(--layer-top)',
          position: 'relative'
        }}
        css={css`
          overflow: hidden !important;
        `}
        open={open}
        closeOnEsc={true}
        {...props}
      >
        <div css={styles.wrapper}>
          <CloseIcon
            css={[styles.icon, styles.close]}
            onClick={() => onClose()}
          />
          <Carousel
            selectedItem={selected}
            renderArrowPrev={(navigate, hasPrev) =>
              hasPrev ? (
                <PrevIcon
                  css={[
                    styles.icon,
                    styles.nav,
                    css`
                      left: 0;
                    `
                  ]}
                  onClick={navigate}
                />
              ) : null
            }
            renderArrowNext={(navigate, hasNext) =>
              hasNext ? (
                <NextIcon
                  css={[
                    styles.icon,
                    styles.nav,
                    css`
                      right: 0;
                    `
                  ]}
                  onClick={navigate}
                />
              ) : null
            }
          >
            {images.map(({ image, title }: Image) => (
              <div css={styles.slide}>
                <Img
                  css={styles.image}
                  prismic={image}
                  alt={title}
                  sizes="100vw"
                />
                <h1 css={styles.title}>{title}</h1>
              </div>
            ))}
          </Carousel>
        </div>
      </Overlay>
    </>
  );
}
