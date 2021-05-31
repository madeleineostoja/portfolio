import watchMedia from 'svelte-media';
import { customMedia } from '$src/styles/breakpoints.json';
import { writable } from 'svelte/store';
import type { Global } from '$types/_generated/prismic';

export const media = watchMedia(customMedia);
export const globalData = writable<Global>({} as Global);
