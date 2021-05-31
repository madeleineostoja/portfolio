<script>
  import type { PrismicImg } from '$src/lib/prismic/types';
  import Gallery from 'svelte-gallery';
  import ImageGridImg from './ImageGridImg.svelte';

  export let images: PrismicImg[] = [];
  export let sizes: string;
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
    gutter={16}
    images={images.map(({ dimensions, url, alt }) => ({
      src: url,
      sizes,
      alt,
      ...dimensions
    }))}
    imageComponent={ImageGridImg}
  />
</div>
