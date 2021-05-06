import NextLink from 'next/link';
import { HTMLProps } from 'react';

export type LinkProps = typeof NextLink['props'] & HTMLProps<HTMLAnchorElement>;

/**
 * Link wrapper
 */
export function Link({
  href = '',
  as,
  shallow,
  children,
  ...props
}: LinkProps) {
  const isExternal = /^https?:\/\//i.test(href);

  return (
    <NextLink {...{ href, as, shallow }}>
      <a {...props} target={isExternal ? '_blank' : ''}>
        {children}
      </a>
    </NextLink>
  );
}
