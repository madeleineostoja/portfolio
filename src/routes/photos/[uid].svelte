<script context="module">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import type { Collection, Photo } from '$src/../@types/_generated/prismic';
  import PrevIcon from '$src/assets/icons/caret-left.svelte';
  import NextIcon from '$src/assets/icons/caret-right.svelte';
  import Anchor from '$src/components/Anchor/Anchor.svelte';
  import Button from '$src/components/Button/Button.svelte';
  import {
    prismicImg,
    queryAt,
    resolveDocument,
    resolveLink
  } from '$src/lib/prismic';
  import type { PrismicDocument } from '$src/lib/prismic/types';
  import { customMedia } from '$src/styles/breakpoints.json';
  import type { Load } from '@sveltejs/kit';
  import imgix from 'svelte-imgix';
  import Meta from 'svelte-meta';

  export const load: Load = async ({ page, fetch }) => {
    const { uid, data } = await queryAt('my.photo.uid', page.params.uid, fetch),
      collections = await queryAt('document.type', 'collection', fetch),
      collection = collections.find(({ data: doc }: any) => {
        return doc.photos.some(({ photo }: any) => photo.uid === uid);
      });

    return data
      ? {
          props: {
            uid,
            data,
            collection
          }
        }
      : undefined;
  };
</script>

<script>
  export let uid: string;
  export let data: Photo;
  export let collection: PrismicDocument<Collection>;

  $: current = photos?.findIndex(({ photo }: any) => photo?.uid === uid) || 0;

  const { photos } = collection.data as any,
    ref = $page.query.get('ref'),
    getPhotoHref = (photosIndex: number) =>
      `${resolveDocument(photos[photosIndex].photo)}${
        ref ? `?ref=${ref}` : ''
      }`;

  $: firstPhoto = current === 0;
  $: lastPhoto = current === photos.length - 1;
  $: previousPhoto = !firstPhoto ? getPhotoHref(current - 1) : '';
  $: nextPhoto = !lastPhoto ? getPhotoHref(current + 1) : '';

  function handleKeydown({ key }: KeyboardEvent) {
    switch (key) {
      case 'Escape':
        goto(ref && ref === 'collection' ? resolveDocument(collection) : '/');
        break;
      case 'ArrowLeft':
        current !== 0 && goto(previousPhoto);
        break;
      case 'ArrowRight':
        current !== photos.length - 1 && goto(nextPhoto);
        break;
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
      {`Captured on ${data.film} film, with the ${data.camera} camera`}
    </p>
    {#if data.store_link.url}
      <Anchor href={resolveLink(data.store_link)}>Buy this print</Anchor>
    {/if}
  </div>
  <div class="frame">
    <img
      class="photo"
      use:imgix={data.photo.url}
      {...prismicImg(data.photo)}
      sizes="{customMedia['--tablet']} 50vw, 100vw"
      alt={data.title}
    />

    <nav class="nav">
      {#if !firstPhoto}
        <a sveltekit:prefetch class="navIcon" href={previousPhoto}>
          <PrevIcon />
        </a>
      {:else}
        <div />
      {/if}

      {#if !lastPhoto}
        <a sveltekit:prefetch class="navIcon" href={nextPhoto}>
          <NextIcon />
        </a>
      {:else}
        <div />
      {/if}
    </nav>
  </div>
</div>
