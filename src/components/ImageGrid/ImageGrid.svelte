<script lang="ts">
  import type { PrismicImg } from '$src/lib/prismic/types';
  import { media } from '$src/lib/stores';
  import Gallery from 'svelte-gallery';
  import ImageGridImg from './ImageGridImg.svelte';

  export let images: PrismicImg[] = [];
  export let sizes: string;
</script>

<style lang="postcss">
  .images {
    margin: var(--size-8) 0;
  }
  img {
    width: 50%;
  }
</style>

<div class="images {$$props.class}">
  <Gallery
    rowHeight={300}
    gutter={$media['--tablet'] ? 16 : 8}
    images={images.map(({ dimensions, url, alt }) => ({
      src: url,
      sizes,
      alt,
      ...dimensions
    }))}
    imageComponent={ImageGridImg}
  />
</div>
