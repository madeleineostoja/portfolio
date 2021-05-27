<script context="module">
  export const load: Load = async ({ page }) => {
    const { data } = await queryAt('my.collection.uid', page.params.uid, {
      fetchLinks: ['photo.photo', 'photo.title']
    });

    return {
      props: { data }
    };
  };
</script>

<script>
  import type { Load } from '@sveltejs/kit';
  import { title } from 'process';
  import Gallery from 'svelte-gallery';
  import Meta from 'svelte-meta';
  import type { Collection } from '../../../@types/_generated/prismic';
  import Button from '../../components/Button/Button.svelte';
  import Footer from '../../components/Footer/Footer.svelte';
  import GalleryImage from '../../components/GalleryImage/GalleryImage.svelte';
  import Header from '../../components/Header/Header.svelte';
  import SectionHeader from '../../components/SectionHeader/SectionHeader.svelte';
  import { plaintext, queryAt } from '../../lib/prismic';
  import { media } from '../../lib/stores';
  import { customMedia } from '../../styles/breakpoints.json';

  export let data: Collection;
</script>

<Meta
  title={data.meta_title}
  description={data.meta_description}
  image={data.meta_cover.url}
/>

<Header />

<SectionHeader title={plaintext(data.name)} large>
  <Button slot="action" back href="/">Back</Button></SectionHeader
>
<Gallery
  gutter={$media['--desktop'] ? 12 : 16}
  images={data.photos
    ? data.photos.map(({ photo }) => {
        const { url, dimensions } = photo?.data.photo;

        return {
          uid: photo?.uid,
          src: url,
          sizes: [
            `${customMedia['--mobile']} 50vw`,
            `${customMedia['--tablet']} 33vw`,
            `100vw`
          ],
          alt: photo?.data.title,
          ...dimensions
        };
      })
    : []}
  rowHeight={420}
  imageComponent={GalleryImage}
/>

<Footer />
