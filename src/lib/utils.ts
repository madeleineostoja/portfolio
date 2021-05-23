/**
 * Resole relative URLs against a source
 */
export function resolveUrl(link: string, source: string) {
  if (!link) {
    return source;
  }

  const url = new URL(source, link);

  return !/^https?:\/\//i.test(link) ? url : link;
}

/**
 * Helper to update CSS variables
 */
export function setProperties(properties: any) {
  Object.keys(properties).forEach((property: string) =>
    document.documentElement.style.setProperty(property, properties[property])
  );
}
