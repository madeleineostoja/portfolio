<script context="module">
  import type { Load } from '@sveltejs/kit';
  import imgix from 'svelte-imgix';
  import Meta from 'svelte-meta';
  import type { Collection, Photo } from '../../../@types/_generated/prismic';
  import link from '../../actions/link';
  import PrevIcon from '../../assets/icons/caret-left.svelte';
  import NextIcon from '../../assets/icons/caret-right.svelte';
  import Anchor from '../../components/Anchor/Anchor.svelte';
  import Button from '../../components/Button/Button.svelte';
  import {
    prismicImg,
    queryAt,
    resolveDocument,
    resolveLink
  } from '../../lib/prismic';
  import { page } from '$app/stores';
  import type { PrismicDocument } from '../../lib/prismic/types';
  import { goto } from '$app/navigation';

  export const load: Load = async ({ page }) => {
    const { uid, data } = await queryAt('my.photo.uid', page.params.uid),
      collections = await queryAt('document.type', 'collection'),
      collection = collections.find(({ data: doc }: any) => {
        return doc.photos.some(({ photo }: any) => photo.uid === uid);
      });

    return {
      props: {
        uid,
        data,
        collection
      }
    };
  };
</script>

<script>
  export let uid: string;
  export let data: Photo;
  export let collection: PrismicDocument<Collection>;

  const { photos } = collection.data as any,
    ref = $page.query.get('ref');

  $: current = photos?.findIndex(({ photo }: any) => photo?.uid === uid) || 0;

  function handleKeydown({ key }: KeyboardEvent) {
    if (key === 'Escape') {
      goto(ref && ref === 'collection' ? resolveDocument(collection) : '/');
    }
  }
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

<svelte:window on:keydown={handleKeydown} />

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
    {#if data.store_link}
      <Anchor href={resolveLink(data.store_link)}>Buy this print</Anchor>
    {/if}
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
          href="{resolveDocument(photos[current - 1].photo)}?ref={ref}"
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
          href="{resolveDocument(photos[current + 1].photo)}?ref={ref}"
        >
          <NextIcon />
        </a>
      {:else}
        <div />
      {/if}
    </nav>
  </div>
</div>
