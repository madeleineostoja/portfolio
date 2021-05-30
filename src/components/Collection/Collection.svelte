<script>
  import { goto, prefetch } from '$app/navigation';
  import imgix from 'svelte-imgix';
  import type { Photo } from '../../../@types/_generated/prismic';
  import { prismicImg, resolveDocument } from '../../lib/prismic';
  import Anchor from '../Anchor/Anchor.svelte';
  import SectionHeader from '../SectionHeader/SectionHeader.svelte';

  /** Name of the collection */
  export let name: string;
  /** Link to collection  */
  export let href: string;
  /** No description */
  export let photos: ({ uid: string } & Photo)[];

  const photoPage = (uid: string) => resolveDocument({ type: 'photo', uid });
</script>

<style>
  .photos {
    grid-column: 2 / -1;
    display: flex;
    height: 20rem;
  }

  .photo {
    height: 100%;
    width: auto !important;
    margin-right: var(--grid-gap);
    cursor: pointer;
    transition: opacity 150ms ease;
    &:hover {
      opacity: 0.8;
    }
  }
</style>

<section class="fullbleed pageGrid {$$props.class}">
  <SectionHeader title={name}>
    <Anchor slot="action" {href}>View Collection</Anchor>
  </SectionHeader>
  <div class="photos">
    {#each photos as { photo, title, uid }}
      <img
        class="photo"
        use:imgix={photo.url}
        {...prismicImg(photo)}
        on:click={() => goto(photoPage(uid))}
        on:mouseenter={() => prefetch(photoPage(uid))}
        on:touchstart={() => prefetch(photoPage(uid))}
        sizes="480px"
        alt={title}
      />
    {/each}
  </div>
</section>
