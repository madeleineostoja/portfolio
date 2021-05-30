import type { RequestHandler } from '@sveltejs/kit';
import { queryAt } from '../../lib/prismic';

export const get: RequestHandler = async ({ params }) => {
  const { uid, data } = await queryAt('my.photo.uid', params.uid),
    collections = await queryAt('document.type', 'collection'),
    collection = collections.find(({ data: doc }: any) => {
      return doc.photos.some(({ photo }: any) => photo.uid === uid);
    });

  return {
    body: {
      uid,
      data,
      collection
    }
  };
};
