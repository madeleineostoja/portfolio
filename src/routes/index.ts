import { queryAt, resolveDocument } from '$src/lib/prismic';
import fetch from 'node-fetch';

const homeCollection = (async () => {
  const { data } = await queryAt('document.type', 'global', fetch);
  return resolveDocument(data.collections[0].collection);
})();

export async function get() {
  return {
    headers: { Location: await homeCollection },
    status: 302
  };
}
