import PrismicDOM from 'prismic-dom';
import { resolveLink } from './resolve';

/**
 * Richtext HTML parser
 */
export default function html(
  type: keyof typeof PrismicDOM.RichText.Elements,
  element: any,
  content: any,
  children: any
) {
  const { Elements } = PrismicDOM.RichText;
  switch (type) {
    case Elements.heading2:
      return /* html */ `
        <h2 class="typeset-heading2" style="margin-top: 2em;">${children}</h2>
      `;

    default:
      return null;
  }
}

/**
 * Convert Prismic RichText to HTML string
 */
export function richtext(richtext: object, inline?: boolean) {
  const result = richtext
    ? PrismicDOM.RichText.asHtml(richtext, resolveLink, html as any)
    : '';

  return inline
    ? result.replace(/^<[^>]+>|<\/[^>]+>$|<[^/>][^>]*><\/[^>]+>/g, '')
    : result;
}

/**
 * Convert Prismic RichText to plaintext string
 */
export function plaintext(richtext: object) {
  return richtext ? PrismicDOM.RichText.asText(richtext) : '';
}
