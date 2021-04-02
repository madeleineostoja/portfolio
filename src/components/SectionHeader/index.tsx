import { css } from '@emotion/react';
import { ReactNode } from 'react';
import { mobile } from '../../styles/breakpoints';
import { heading1 } from '../../styles/typesets';

export type SectionHeaderProps = {
  /** Title for the header */
  title: string;
  /** Optional action content area */
  action?: ReactNode;
};

const styles = {
  header: css`
    padding-bottom: var(--spacing-1);
    border-bottom: 1px solid var(--color-grey-300);
    margin-bottom: var(--spacing-2);
    @media (min-width: ${mobile}) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `,
  name: css`
    ${heading1}
    line-height: 1;
    white-space: nowrap;
  `,
  action: css`
    display: inline-block;
    @media (max-width: ${mobile}) {
      margin-top: 1rem;
      transform: translateX(2px);
    }
  `
};

/**
 * Section header with optional action area
 */
export function SectionHeader({ title, action, ...props }: SectionHeaderProps) {
  return (
    <div css={styles.header} {...props}>
      <h1 css={styles.name}>{title}</h1>
      <div css={styles.action}>{action}</div>
    </div>
  );
}
