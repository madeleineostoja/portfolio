import { css } from '@emotion/react';
import { normalize } from 'satchel-css';
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
      font-family: var(--font-sans);
      font-weight: var(--font-weight-default);
      line-height: var(--leading-default);
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
