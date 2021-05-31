<script context="module">
  import Collection from '$src/components/Collection/Collection.svelte';
  import Footer from '$src/components/Footer/Footer.svelte';
  import Header from '$src/components/Header/Header.svelte';
  import { plaintext, queryAt, resolveDocument } from '$src/lib/prismic';
  import type { Home } from '$types/_generated/prismic';
  import type { Load } from '@sveltejs/kit';
  import Meta from 'svelte-meta';

  export const load: Load = async ({ fetch }) => {
    const { data } = await queryAt('document.type', 'home', fetch, {
      fetchLinks: [
        'collection.name',
        'collection.photos',
        'photo.photo',
        'photo.title',
        'photo.uid'
      ]
    });

    return data ? { props: { data } } : undefined;
  };
</script>

<script>
  export let data: Home;
</script>

<style>
  section {
    overflow: hidden;
  }

  :global(.collection:not(:last-of-type)) {
    margin-bottom: var(--spacing-4);
  }
</style>

<Meta
  title={data.meta_title}
  description={data.meta_description}
  image={data.meta_cover.url}
/>

<Header />
<section class="pageGrid fullbleed">
  {#each data.collections as { collection }}
    <Collection
      class="collection"
      name={plaintext(collection?.data.name)}
      photos={collection?.data.photos.map(({ photo }) => photo.data)}
      href={resolveDocument(collection)}
    />
  {/each}
</section>
<Footer />
