import { css } from '@emotion/react';
import { normalize } from 'satchel-css';
import { paragraph } from './typesets';
import variables from './variables';

/**
 * Base document styles
 */
export default [
  variables,
  css`
    ${normalize({
      base: 'remedy',
      fontSmoothing: true,
      resetMargins: true,
      resetHeadings: true
    })}

    html {
      color: var(--color-text);
      -ms-overflow-style: -ms-autohiding-scrollbar;
    }

    body {
      ${paragraph}
      font-family: var(--font-sans);
      font-weight: var(--font-weight-default);
      position: relative;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    section {
      content-visibility: auto;
    }
  `
];
