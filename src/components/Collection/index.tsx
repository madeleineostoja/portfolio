import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { WithMeta } from '../../../@types/prismic';
import { Photo } from '../../../@types/_generated/prismic';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import { subPageGrid } from '../../styles/mixins';
import { Img } from '../Img';
import { Link } from '../Link';
import { SectionHeader } from '../SectionHeader';

export type CollectionProps = {
  /** Name of the collection */
  name: string;
  /** Link to collection */
  href: string;
  /** No description */
  photos: WithMeta<Photo>[];
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
  photos: css`
    grid-column: 2 / -1;
    display: flex;
    height: 17rem;
  `,
  photo: css`
    height: 100%;
    width: auto !important;
    margin-right: var(--grid-gap);
    cursor: pointer;
  `
};

/**
 * Preview of a collection
 */
export function Collection({ name, href, photos, ...props }: CollectionProps) {
  const router = useRouter();

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
      <div css={styles.photos}>
        {photos.map(({ photo, title, uid }) => (
          <Img
            onClick={() => router.push(`/photos/${uid}`)}
            sizes="450px"
            css={styles.photo}
            prismic={photo}
            alt={title}
            key={uid}
          />
        ))}
      </div>
    </section>
  );
}
