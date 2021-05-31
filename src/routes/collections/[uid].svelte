<script context="module">
  import Footer from '$src/components/Footer/Footer.svelte';
  import GalleryImage from '$src/components/GalleryImage/GalleryImage.svelte';
  import Header from '$src/components/Header/Header.svelte';
  import { queryAt } from '$src/lib/prismic';
  import { media } from '$src/lib/stores';
  import { customMedia } from '$src/styles/breakpoints.json';
  import type { Collection } from '$types/_generated/prismic';
  import type { Load } from '@sveltejs/kit';
  import Gallery from 'svelte-gallery';
  import Meta from 'svelte-meta';

  export const load: Load = async ({ page, fetch }) => {
    const { data } = await queryAt(
      'my.collection.uid',
      page.params.uid,
      fetch,
      {
        fetchLinks: ['photo.photo', 'photo.title']
      }
    );

    return data ? { props: { data } } : undefined;
  };
</script>

<script>
  export let data: Collection;
</script>

<Meta
  title={data.meta_title}
  description={data.meta_description}
  image={data.meta_cover.url}
/>

<Header />

<!-- <SectionHeader title={plaintext(data.name)} large>
  <Button slot="action" back href="/">Back</Button></SectionHeader
> -->
<Gallery
  gutter={$media['--tablet'] ? 32 : 16}
  images={data.photos
    ? data.photos.map(({ photo }) => {
        const { url, dimensions } = photo?.data.photo;

        return {
          uid: photo?.uid,
          src: url,
          sizes: `${customMedia['--tablet']} 33vw, ${customMedia['--mobile']} 50vw, 100vw`,
          alt: photo?.data.title,
          ...dimensions
        };
      })
    : []}
  rowHeight={420}
  imageComponent={GalleryImage}
/>

<Footer />
