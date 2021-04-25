import NextLink from 'next/link';
import { HTMLProps } from 'react';

/**
 * Link wrapper
 */
export function Link({
  href = '',
  as,
  shallow,
  children,
  ...props
}: typeof NextLink['props'] & HTMLProps<HTMLAnchorElement>) {
  const isExternal = /^https?:\/\//i.test(href);

  return (
    <NextLink {...{ href, as, shallow }}>
      <a {...props} target={isExternal ? '_blank' : ''}>
        {children}
      </a>
    </NextLink>
  );
}
