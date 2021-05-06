import { css } from '@emotion/react';
import { Link as PrismicLink, RichText } from 'prismic-dom';
import { ReactNode } from 'react';
import { Img } from '../components/Img';
import { Link } from '../components/Link';
import { heading2 } from '../styles/typesets';
import { resolveLink } from './prismic';
import render from 'preact-render-to-string';

const styles = {
  img: css`
    margin: var(--spacing-2) 0;
    border-radius: var(--radius-2);
  `,
  link: css`
    color: var(--color-primary);
  `,
  heading2: css`
    ${heading2}
    margin-top: 2em;
  `
};

export default function html(
  type: keyof typeof RichText.Elements,
  element: any,
  content: ReactNode,
  children: ReactNode[]
) {
  const { Elements } = RichText;
  switch (type) {
    case Elements.image:
      return render(<Img css={styles.img} prismic={element} />);

    case Elements.hyperlink:
      return render(
        <Link
          css={styles.link}
          href={PrismicLink.url(element.data, resolveLink)}
        >
          {content}
        </Link>
      );

    case Elements.heading2:
      return render(<h2 css={styles.heading2}>{children}</h2>);

    default:
      return null;
  }
}
