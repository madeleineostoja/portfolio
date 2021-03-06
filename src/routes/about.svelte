<script context="module" lang="ts">
  import Anchor from '$src/components/Anchor/Anchor.svelte';
  import Footer from '$src/components/Footer/Footer.svelte';
  import Header from '$src/components/Header/Header.svelte';
  import ImageGrid from '$src/components/ImageGrid/ImageGrid.svelte';
  import SectionHeader from '$src/components/SectionHeader/SectionHeader.svelte';
  import {
    maxage,
    plaintext,
    prismicImg,
    queryAt,
    richtext
  } from '$src/lib/prismic';
  import { customMedia } from '$src/styles/lib/breakpoints.json';
  import type { About } from '$types/_generated/prismic';
  import type { Load } from '@sveltejs/kit';
  import imgix from 'svelte-imgix';
  import Meta from 'svelte-meta';

  export const load: Load = async ({ fetch }) => {
    const { data } = await queryAt('document.type', 'about', fetch);
    return { props: { data }, maxage };
  };
</script>

<script lang="ts">
  export let data: About;
</script>

<style lang="postcss">
  .sidebar {
    display: none;
    @media (--laptop) {
      display: block;
      grid-column: 1 / 4;
    }
  }

  .sidebar-image {
    position: sticky;
    border-radius: var(--radius-sm);
    top: var(--size-8);
  }

  .article {
    grid-column: 1 / -1;
    & :global(a) {
      color: var(--color-highlight);
    }
    @media (--tablet) {
      grid-column: 2 / 12;
    }
    @media (--laptop) {
      grid-column: 5 / -1;
    }
  }
</style>

<Meta title={data.meta_title} description={data.meta_description} />

<Header />

<section class="contentGrid">
  <aside class="sidebar">
    <img
      class="sidebar-image"
      use:imgix={data.image.url}
      {...prismicImg(data.image)}
      alt="Photo of Madeleine Ostoja"
      sizes="33vw"
    />
  </aside>
  <div class="article">
    <SectionHeader large title={plaintext(data.title)}>
      <Anchor slot="action" href="mailto:madi@madeleineostoja.com"
        >Get in touch</Anchor
      >
    </SectionHeader>
    <article>
      {#each data.body as { primary, items, slice_type }}
        {#if slice_type === 'rich_text'}
          <div>{@html richtext(primary.content)}</div>
        {/if}

        {#if slice_type === 'images'}
          <ImageGrid
            images={items.map(({ image }) => image)}
            sizes="{customMedia['--tablet']} 33vw, 50vw"
          />
        {/if}
      {/each}
    </article>
  </div>
</section>

<Footer />
