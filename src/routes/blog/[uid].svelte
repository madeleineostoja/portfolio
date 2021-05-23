<script context="module">
  import type { Load } from '@sveltejs/kit';
  import Meta from 'svelte-meta';
  import type { Post } from '../../../@types/_generated/prismic';
  import Footer from '../../components/Footer/Footer.svelte';
  import Header from '../../components/Header/Header.svelte';
  import ImageGrid from '../../components/ImageGrid/ImageGrid.svelte';
  import { getUid, plaintext, richtext } from '../../lib/prismic';

  export const load: Load = async ({ page }) => ({
    props: {
      data: await getUid('post', page.params?.uid)
    }
  });
</script>

<script>
  export let data: Post;
</script>

<style></style>

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
      <div>{@html richtext(primary.content)}</div>
    {:else if slice_type === 'images'}
      <ImageGrid images={items.map(({ image }) => image)} />
    {/if}
  {/each}
</article>
<Footer />
