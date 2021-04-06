import { css } from '@emotion/react';

/**
 * Design system
 * Using Pollen as a foundation
 * https://pollen.style
 */
export default css`
  :root {
    /* Typography */
    --font-sans: 'Inter', sans-serif;
    --font-weight-bold: 600;
    --font-weight-default: 500;

    /* Colours */
    --color-text: var(--color-black);
    --color-text-secondary: var(--color-grey-700);
    --color-primary: #d71673;

    /* Layout — Page */
    --content-max-width: 80rem;
    --page-gutter: 8vw;
    --page-gutter-offset: calc(0px - var(--page-gutter));
    --grid-page: minmax(var(--page-gutter), 1fr)
      minmax(0, var(--content-max-width)) minmax(var(--page-gutter), 1fr);
    --grid-content: repeat(12, 1fr);

    /* Layout — Constants */
    --grid-gap: 0.75rem;

    /* UI */
  }
`;
