// We don't use GraphQL & Apollo because of workarounds needed for slice introspection
// See https://github.com/prismicio/apollo-link-prismic/issues/10
import Prismic from 'prismic-javascript';
import type { ResolvedApiOptions } from 'prismic-javascript/types/ResolvedApi';
import { placeholder } from 'svelte-imgix';
import type { PrismicImg } from '../../@types/prismic';
import { PRISMIC_API } from './consts';

/**
 * Get Prismic API
 */
async function getPrismic(options?: ResolvedApiOptions) {
  const api = await Prismic.getApi(PRISMIC_API);

  return {
    api,
    options: {
      ref: api.masterRef.ref,
      pageSize: 100,
      ...options
    }
  };
}

/**
 * Prismic Query helper
 */
export async function query(
  field: string,
  query: string[] | string,
  opts?: ResolvedApiOptions
) {
  const { api, options } = await getPrismic(opts);

  return await api.query(Prismic.Predicates.at(field, query), options);
}

/**
 * Get single document shortcut
 */
export async function get(type: string, ...args: any) {
  const { api, options } = await getPrismic(...args),
    result = await api.getSingle(type, options);

  if (!result) {
    throw new Error('Unpublished document');
  }

  const { data, ...rest } = result;
  return { ...data, ...rest };
}

/**
 * Get all of a type shortcut
 */
export async function getAll(type: string, ...args: any) {
  const { results } = await query('document.type', type, ...args);
  return results;
}

/**
 * Get by UID shortcut
 */
export async function getUid(type: string, docUid: string, ...args: any) {
  const { api, options } = await getPrismic(...args),
    result = await api.getByUID(type, docUid, options);

  if (!result) {
    throw new Error('Unpublished document');
  }

  const { data, ...rest } = result;
  return { ...data, ...rest };
}

/**
 * Prismic image attribute shorthand
 */
export function prismicImg(img: PrismicImg) {
  return {
    src: placeholder(img.url),
    alt: img.alt,
    ...img.dimensions
  };
}
