import Prismic from 'prismic-dom';
const { Link, RichText } = Prismic;

export default function html(
  type: keyof typeof RichText.Elements,
  element: any,
  content: any,
  children: any
) {
  const { Elements } = RichText;
  switch (type) {
    case Elements.heading2:
      return /* html */ `
        <h2 class="typeset-heading2" style="margin-top: 2em;">${children}</h2>
      `;

    default:
      return null;
  }
}
