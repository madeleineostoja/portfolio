<script context="module">
  import type { Load } from '@sveltejs/kit';
  import { resolveDocument } from '../../lib/resolve';
  import imgix from 'svelte-imgix';
  import Meta from 'svelte-meta';
  import type { PrismicDocument, WithMeta } from '../../../@types/prismic';
  import type { Collection, Photo } from '../../../@types/_generated/prismic';
  import link from '../../actions/link';
  import PrevIcon from '../../assets/icons/caret-left.svelte';
  import NextIcon from '../../assets/icons/caret-right.svelte';
  import Button from '../../components/Button/Button.svelte';
  import { getAll, getUid, prismicImg } from '../../lib/prismic';

  export const load: Load = async ({ page }) => {
    const data = await getUid('photo', page.params.uid),
      collections = await getAll('collection'),
      collection = collections.find(({ data: doc }: any) => {
        return doc.photos.some(({ photo }: any) => photo.uid === data.uid);
      });

    return {
      props: {
        data,
        collection
      }
    };
  };
</script>

<script>
  export let data: WithMeta<Photo>;
  export let collection: PrismicDocument<Collection>;

  const { photos } = collection.data as any;

  $: current =
    photos?.findIndex(({ photo }: any) => photo?.uid === data.uid) || 0;
</script>

<style>
  .page {
    grid-auto-flow: dense;
    min-height: calc(100vh - var(--spacing-3) - var(--spacing-3));
    grid-template-rows: auto 1fr;
  }

  .header {
    grid-column: 1 / -1;
    margin-bottom: var(--spacing-3);
    text-align: right;
  }

  .frame {
    display: flex;
    flex-direction: column;
    grid-column: 1 / -1;
    justify-content: space-between;
    @media (--tablet) {
      grid-column: 1 / 8;
    }
    @media (--laptop) {
      grid-column-start: 2;
    }
  }

  .photo {
    object-fit: contain;
    object-position: center top;
    @media (--tablet) {
      max-height: 71vh;
    }
  }

  .details {
    grid-column: 1 / -1;
    margin-bottom: var(--spacing-2);
    @media (--tablet) {
      grid-column: 9 / -1;
    }
    @media (--laptop) {
      grid-column-end: 12;
    }
  }

  .description {
    color: var(--color-text-secondary);
  }

  .nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: var(--spacing-3);
  }

  .navIcon :global(svg) {
    fill: currentColor;
    height: var(--scale-1);
    width: var(--scale-1);
    cursor: pointer;
  }
</style>

<Meta
  title={data.title}
  description={`${data.title}, captured on ${data.film} with the ${data.camera} by Madeleine Ostoja`}
  image={data.photo.url}
/>

<div class="page contentGrid">
  <header class="header">
    <Button href={resolveDocument(collection)}>Collection</Button>
  </header>

  <div class="details">
    <h1 class="typeset-h1">{data.title}</h1>
    <p class="description">
      {`Captured on ${data.film} film, with the ${data.camera}`}
    </p>
  </div>
  <div class="frame">
    <img
      class="photo"
      use:imgix={data.photo.url}
      {...prismicImg(data.photo)}
      alt={data.title}
    />

    <nav class="nav">
      {#if current > 0}
        <a
          use:link
          class="navIcon"
          href={resolveDocument(photos[current - 1].photo)}
        >
          <PrevIcon />
        </a>
      {:else}
        <div />
      {/if}

      {#if current + 1 < photos.length}
        <a
          use:link
          class="navIcon"
          href={resolveDocument(photos[current + 1].photo)}
        >
          <NextIcon />
        </a>
      {:else}
        <div />
      {/if}
    </nav>
  </div>
</div>
