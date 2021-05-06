import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { WithMeta } from '../../../@types/prismic';
import { Photo } from '../../../@types/_generated/prismic';

import { subPageGrid } from '../../styles/mixins';
import { Anchor } from '../Anchor';
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
        action={<Anchor href={href}>View Collection</Anchor>}
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
