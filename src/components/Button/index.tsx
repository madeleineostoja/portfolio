import { css } from '@emotion/react';
import { ReactNode } from 'react';
import { ReactComponent as PrevIcon } from '../../assets/icons/caret-left.svg';
import { ReactComponent as NextIcon } from '../../assets/icons/caret-right.svg';
import { Link } from '../Link';

export type ButtonProps = {
  /** Link for the button */
  href: string;
  /** Whether arrow should be backwards */
  back?: boolean;
  children: ReactNode;
};

const styles = {
  button: css`
    display: inline-flex;
    align-items: center;
    font-size: var(--scale-00);
    padding: 0.5em 1em;
    line-height: 1;
    border-radius: var(--radius-round);
    background: var(--color-grey-100);
    color: var(--color-grey-700);
    font-weight: var(--font-weight-semibold);
  `,
  icon: css`
    fill: currentColor;
    height: 0.625em;
    width: 0.625em;
  `
};

/**
 * Simple button component
 */
export function Button({ href, back, children, ...props }: ButtonProps) {
  return (
    <Link css={styles.button} href={href} {...props}>
      {back && <PrevIcon css={styles.icon} />}
      <div
        css={css`
          margin: 0 ${!back ? '0.3em' : 0} 0 ${back ? '0.3em' : 0};
        `}
      >
        {children}
      </div>
      {!back && <NextIcon css={styles.icon} />}
    </Link>
  );
}
