import { customMedia } from '$src/styles/breakpoints.json';
import type { Global } from '$types/_generated/prismic';
import watchMedia from 'svelte-media';
import { writable } from 'svelte/store';

export const media: any = watchMedia(customMedia);
export const globalData = writable<Global>({} as Global);
