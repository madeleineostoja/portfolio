import { css } from '@emotion/react';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import { subPageGrid } from '../../styles/mixins';
import { Img, ImgProps } from '../Img';
import { Link } from '../Link';
import { SectionHeader } from '../SectionHeader';

export type CollectionProps = {
  /** Name of the collection */
  name: string;
  /** Link to collection */
  href: string;
  /** No description */
  images: ImgProps[];
};

const styles = {
  cta: css`
    display: inline-flex;
    align-items: center;
    color: var(--color-primary);
  `,
  ctaIcon: css`
    fill: currentColor;
    width: 1em;
    height: 1em;
    margin-left: 0.5em;
    transform: translateY(5%);
  `,
  images: css`
    grid-column: 2 / -1;
    display: flex;
    height: 17rem;
  `,
  image: css`
    height: 100%;
    width: auto !important;
    margin-right: var(--grid-gap);
  `
};

/**
 * Preview of a collection
 */
export function Collection({ name, href, images, ...props }: CollectionProps) {
  return (
    <section css={subPageGrid} {...props}>
      <SectionHeader
        title={name}
        action={
          <Link css={styles.cta} href={href}>
            View Collection
            <ArrowIcon css={styles.ctaIcon} />
          </Link>
        }
      />
      <div css={styles.images}>
        {images.map((data: ImgProps) => (
          <Img sizes="450px" css={styles.image} {...data} />
        ))}
      </div>
    </section>
  );
}
