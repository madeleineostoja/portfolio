/**
 * Prismic document resolver
 */
export function resolveDocument(doc: any) {
  if (!doc) {
    return '';
  }

  switch (doc.type) {
    case 'home':
      return '/';
    case 'collection':
      return `/collections/${doc.uid}`;
    case 'photo':
      return `/photos/${doc.uid}`;
    default:
      return `/${doc.uid}`;
  }
}

/**
 * Prismic internal link resolver
 */
export function resolveLink(link: { link_type?: string; url?: string }) {
  if (!link) {
    return '';
  }

  return link.link_type && link.link_type !== 'Document'
    ? link.url || ''
    : resolveDocument(link);
}
