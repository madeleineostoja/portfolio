import { css } from '@emotion/react';

const styles = {
  footer: css`
    margin-top: var(--spacing-6);
  `,
  legal: css`
    font-size: var(--scale-00);
    color: var(--color-grey-700);
  `
};

/**
 * Global site footer
 */
export function Footer(props: any) {
  return (
    <footer css={styles.footer} {...props}>
      <span css={styles.legal}>
        Copyright &copy; {new Date().getFullYear()} Madeleine Ostoja
      </span>
    </footer>
  );
}
