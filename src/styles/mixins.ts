import { css } from '@emotion/react';
import { subgrid } from 'satchel-css';

/** Page grid */
export const pageGrid = css`
  display: grid;
  position: relative;
  grid-template-columns: var(--grid-page);
  & > * {
    grid-column: 2 / 3;
  }
`;

/** Content grid */
export const contentGrid = css`
  display: grid;
  grid-template-columns: var(--grid-content);
`;

/** Subgrid with page container inheritence */
export const subPageGrid = css`
  ${subgrid}
  & > * {
    grid-column: 2 / 3;
  }
`;

/** Inline richtext reset */
export const inlineRichtext = css`
  & > p:first-of-type {
    margin-top: 0;
  }
  & > p:last-of-type {
    margin-bottom: 0;
  }
`;
