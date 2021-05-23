<script>
  import type { PrismicImg } from '@types/prismic';
  import Gallery from 'svelte-gallery';
  import { placeholder, srcset } from 'svelte-imgix';
  import { onMount } from 'svelte';
  import { customMedia } from '../../styles/breakpoints.json';
  import { media } from '../../lib/stores';

  export let images: PrismicImg[] = [];
</script>

<style>
  .images {
    margin: var(--spacing-2) 0;
  }
  img {
    width: 50%;
  }
</style>

<div class="images {$$props.class}">
  <Gallery
    gutter={$media['--desktop'] ? 8 : 12}
    images={images.map(({ dimensions, url, alt }) => ({
      placeholder: placeholder(url),
      src: url,
      srcset: srcset(url),
      sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
      alt,
      ...dimensions
    }))}
  />
</div>
