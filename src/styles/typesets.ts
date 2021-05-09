import { css } from '@emotion/react';
import { mobile } from './breakpoints';

export const paragraph = css`
  font-size: var(--scale-1);
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.0139em;
  @media (max-width: ${mobile}) {
    font-size: var(--scale-0);
    letter-spacing: 0;
  }
`;

export const heading1 = css`
  font-size: var(--scale-4);
  line-height: 1.4;
  letter-spacing: -0.0195em;
`;

export const heading2 = css`
  font-size: var(--scale-3);
  line-height: 1.4;
  letter-spacing: -0.0195em;
`;
