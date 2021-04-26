import { Meta } from './_generated/prismic';

export type WithMeta<T> = T & Meta;
export type PrismicDocument<T> = Meta & { data: T };
