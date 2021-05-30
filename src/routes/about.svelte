<script context="module">
  import type { Load } from '@sveltejs/kit';
  import imgix, { placeholder } from 'svelte-imgix';
  import Meta from 'svelte-meta';
  import type { About } from '../../@types/_generated/prismic';
  import Anchor from '../components/Anchor/Anchor.svelte';
  import Footer from '../components/Footer/Footer.svelte';
  import Header from '../components/Header/Header.svelte';
  import ImageGrid from '../components/ImageGrid/ImageGrid.svelte';
  import SectionHeader from '../components/SectionHeader/SectionHeader.svelte';
  import { plaintext, prismicImg, queryAt, richtext } from '../lib/prismic';
  import { customMedia } from '../styles/breakpoints.json';

  export const load: Load = async () => {
    const { data } = await queryAt('document.type', 'about');

    return {
      props: { data }
    };
  };
</script>

<script>
  export let data: About;
</script>

<style>
  .sidebar {
    display: none;
    @media (--laptop) {
      display: block;
      grid-column: 1 / 4;
    }
  }

  .sidebar-image {
    margin: 0 0 var(--spacing-2);
    border-radius: var(--radius-2);
  }

  .article {
    grid-column: 1 / -1;
    & :global(a) {
      color: var(--color-primary);
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
