<script context="module" lang="ts">
  import { goto } from '$app/navigation';
  import PrevIcon from '$src/assets/icons/caret-left.svelte';
  import NextIcon from '$src/assets/icons/caret-right.svelte';
  import Anchor from '$src/components/Anchor/Anchor.svelte';
  import Button from '$src/components/Button/Button.svelte';
  import {
    maxage,
    prismicImg,
    queryAt,
    resolveDocument,
    resolveLink
  } from '$src/lib/prismic';
  import type { PrismicDocument } from '$src/lib/prismic/types';
  import { media } from '$src/lib/stores';
  import { customMedia } from '$src/styles/lib/breakpoints.json';
  import type { Collection, Photo } from '$types/_generated/prismic';
  import type { Load } from '@sveltejs/kit';
  import { onMount } from 'svelte';
  import imgix from 'svelte-imgix';
  import Meta from 'svelte-meta';
  import Swipe from 'swipe-listener';

  export const load: Load = async ({ page, fetch }) => {
    const { uid, data } = await queryAt('my.photo.uid', page.params.uid, fetch),
      collections = await queryAt('document.type', 'collection', fetch),
      collection = collections.find(({ data: doc }: any) => {
        return doc.photos.some(({ photo }: any) => photo.uid === uid);
      });

    return {
      props: {
        uid,
        data,
        collection
      },
      maxage
    };
  };
</script>

<script lang="ts">
  export let uid: string;
  export let data: Photo;
  export let collection: PrismicDocument<Collection>;

  const { photos } = collection.data as any,
    getPhotoHref = (photosIndex: number) =>
      `${resolveDocument(photos[photosIndex].photo)}`;

  let photo: HTMLImageElement;

  $: current = photos?.findIndex(({ photo }: any) => photo?.uid === uid) || 0;
  $: firstPhoto = current === 0;
  $: lastPhoto = current === photos.length - 1;
  $: previousPhoto = !firstPhoto ? getPhotoHref(current - 1) : '';
  $: nextPhoto = !lastPhoto ? getPhotoHref(current + 1) : '';

  function handleKeydown({ key }: KeyboardEvent) {
    switch (key) {
      case 'Escape':
        goto(resolveDocument(collection));
        break;
      case 'ArrowLeft':
        current !== 0 && goto(previousPhoto);
        break;
      case 'ArrowRight':
        current !== photos.length - 1 && goto(nextPhoto);
        break;
    }
  }

  function handleImgSwipe(e: any) {
    const { left, right } = e.detail.directions;

    if (right) {
      !firstPhoto && goto(previousPhoto);
    } else if (left) {
      !lastPhoto && goto(nextPhoto);
    }
  }

  onMount(() => {
    const listener = Swipe(photo);
    return () => listener.off();
  });
</script>

<style lang="postcss">
  .page {
    grid-auto-flow: dense;
    grid-template-rows: auto auto 1fr;
    min-height: 75vh;
    @media (--laptop) {
      min-height: calc(100vh - var(--size-12) - var(--size-12));
      grid-template-rows: auto 1fr;
    }
  }

  .header {
    grid-column: 1 / -1;
    text-align: right;
    margin-bottom: var(--size-5);
    @media (--mobile) {
      margin-bottom: var(--size-12);
    }
  }

  .frame {
    display: flex;
    flex-direction: column;
    grid-column: 1 / -1;
    justify-content: space-between;
    @media (--tablet) {
      grid-column: 2 / 12;
    }
    @media (--laptop) {
      grid-column: 1 / 8;
    }
  }

  .photo {
    object-fit: contain;
    object-position: center top;
    width: 100%;
    @media (--laptop) {
      max-height: 71vh;
    }
  }

  .details {
    grid-column: 1 / -1;
    margin-bottom: var(--size-8);
    @media (--tablet) {
      grid-column: 2 / 12;
    }
    @media (--laptop) {
      grid-column: 9 / -1;
    }
  }

  .description {
    color: var(--color-text-secondary);
    margin-top: var(--size-8);
    @media (--laptop) {
      margin-top: 1em;
      max-width: var(--prose-xs);
    }
  }

  .nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: var(--size-8);
    @media (--mobile) {
      margin-top: var(--size-12);
    }
  }

  .navIcon {
    padding: var(--size-2);
    & :global(svg) {
      fill: currentColor;
      height: var(--scale-1);
      width: var(--scale-1);
      cursor: pointer;
    }
  }
</style>

<svelte:window on:keydown={handleKeydown} />

<Meta
  title={data.title}
  description={`${data.title}, captured on ${data.film}`}
  image={data.photo.url}
/>

<div class="page contentGrid">
  <header class="header">
    <Button href={resolveDocument(collection)}>Collection</Button>
  </header>

  <div class="details">
    <h1 class="typeset-h1">{data.title}</h1>
    {#if $media['--mobile']}
      <p class="description">
        {`Captured on ${data.film} film`}
      </p>
      {#if data.store_link.url}
        <Anchor href={resolveLink(data.store_link)}>Buy this print</Anchor>
      {/if}
    {/if}
  </div>
  <div class="frame">
    <div>
      <img
        class="photo"
        bind:this={photo}
        use:imgix={data.photo.url}
        on:swipe={handleImgSwipe}
        {...prismicImg(data.photo)}
        sizes="{customMedia['--tablet']} 50vw, 100vw"
        alt={data.title}
      />

      {#if !$media['--mobile']}
        <p class="description">
          {`Captured on ${data.film} film`}
        </p>
        {#if data.store_link.url}
          <Anchor href={resolveLink(data.store_link)}>Buy this print</Anchor>
        {/if}
      {/if}
    </div>

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
