<script context="module">
  import Footer from '$src/components/Footer/Footer.svelte';
  import Header from '$src/components/Header/Header.svelte';
  import ImageGrid from '$src/components/ImageGrid/ImageGrid.svelte';
  import { plaintext, queryAt, richtext } from '$src/lib/prismic';
  import type { Post } from '$types/_generated/prismic';
  import type { Load } from '@sveltejs/kit';
  import Meta from 'svelte-meta';

  export const load: Load = async ({ page, fetch }) => {
    const { data } = await queryAt('my.post.uid', page.params.uid, fetch);

    return data ? { props: { data } } : undefined;
  };
</script>

<script>
  export let data: Post;
</script>

<style>
  .content {
    & :global(a) {
      color: var(--color-primary);
    }
  }
</style>

<Meta
  title={`${plaintext(data.title)} — Blog`}
  description={data.summary}
  image={data.feature_image.url}
/>

<Header />

<h1>{plaintext(data.title)}</h1>

<article>
  {#each data.body as { primary, items, slice_type }}
    {#if slice_type === 'content'}
      <div class="content">{@html richtext(primary.content)}</div>
    {:else if slice_type === 'images'}
      <ImageGrid images={items.map(({ image }) => image)} />
    {/if}
  {/each}
</article>

<Footer />
