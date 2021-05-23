<script context="module">
  export const load: Load = async ({ page }) => ({
    props: {
      data: await getUid('collection', page.params?.uid as string, {
        fetchLinks: ['photo.photo', 'photo.title']
      })
    }
  });
</script>

<script>
  import type { Load } from '@sveltejs/kit';
  import { resolveDocument } from '../../lib/resolve';
  import { plaintext } from '../../lib/richtext';
  import imgix from 'svelte-imgix';
  import Meta from 'svelte-meta';
  import type { Collection } from '../../../@types/_generated/prismic';
  import link from '../../actions/link';
  import Button from '../../components/Button/Button.svelte';
  import Footer from '../../components/Footer/Footer.svelte';
  import Header from '../../components/Header/Header.svelte';
  import SectionHeader from '../../components/SectionHeader/SectionHeader.svelte';
  import { getUid, prismicImg } from '../../lib/prismic';
  import { customMedia } from '../../styles/breakpoints.json';

  export let data: Collection;
</script>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: var(--grid-content);
  }

  .gallery {
    grid-column: 1 / -1;
    @media (--desktop) {
      grid-column: 2 / span 10;
    }
  }

  .images {
    columns: 1;
    column-gap: var(--grid-gap);
    @media (--mobile) {
      columns: 2;
    }
    @media (--tablet) {
      columns: 3;
    }
  }

  .image {
    display: block;
    padding-bottom: var(--grid-gap);
  }
</style>

<Meta
  title={data.meta_title}
  description={data.meta_description}
  image={data.meta_cover.url}
/>

<Header />

<div class="wrapper">
  <section class="gallery">
    <SectionHeader title={plaintext(data.name)} large>
      <Button slot="action" back href="/">Back</Button></SectionHeader
    >
    <div class="images">
      {#each data.photos as { photo }}
        <a use:link href={resolveDocument(photo)} class="image">
          <img
            use:imgix={photo.data.photo.url}
            {...prismicImg(photo.data.photo)}
            alt={photo.data.title}
            sizes={`${customMedia['--mobile']} 50vw, ${customMedia['--tablet']} 33vw, 100vw`}
          />
        </a>
      {/each}
    </div>
  </section>
</div>

<Footer />
