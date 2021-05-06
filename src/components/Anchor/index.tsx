import { css } from '@emotion/react';
import { Link, LinkProps } from '../Link';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';

const styles = {
  link: css`
    display: inline-flex;
    align-items: center;
    color: var(--color-primary);
  `,
  icon: css`
    fill: currentColor;
    width: 1em;
    height: 1em;
    margin-left: 0.5em;
    transform: translateY(5%);
  `
};

/**
 * Anchor style button
 */
export function Anchor({ children, ...props }: LinkProps) {
  return (
    <Link css={styles.link} {...props}>
      {children}
      <ArrowIcon css={styles.icon} />
    </Link>
  );
}
