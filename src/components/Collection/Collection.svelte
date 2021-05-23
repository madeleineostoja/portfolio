<script>
  import { goto, prefetch } from '$app/navigation';
  import { prismicImg } from '../../lib/prismic';
  import imgix, { placeholder } from 'svelte-imgix';
  import type { WithMeta } from '../../../@types/prismic';
  import type { Photo } from '../../../@types/_generated/prismic';
  import Anchor from '../Anchor/Anchor.svelte';
  import SectionHeader from '../SectionHeader/SectionHeader.svelte';

  /** Name of the collection */
  export let name: string;
  /** Link to collection  */
  export let href: string;
  /** No description */
  export let photos: WithMeta<Photo>[];
</script>

<style>
  .photos {
    grid-column: 2 / -1;
    display: flex;
    height: 17rem;
  }

  .photo {
    height: 100%;
    width: auto !important;
    margin-right: var(--grid-gap);
    cursor: pointer;
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
        on:click={() => goto(`/photos/${uid}`)}
        on:mouseenter={() => prefetch(`/photos/${uid}`)}
        on:touchstart={() => prefetch(`/photos/${uid}`)}
        sizes="450px"
        alt={title}
      />
    {/each}
  </div>
</section>
