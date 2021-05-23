import type { Meta } from './_generated/prismic';

export type WithMeta<T> = T & Meta;
export type PrismicDocument<T> = Meta & { data: T };
export type PrismicSlice = {
  slice_type: string;
  primary: any;
  items: any[];
};
export type PrismicImg = {
  url: string;
  dimensions: {
    width: number;
    height: number;
  };
  alt?: string;
};
