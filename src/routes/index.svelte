<script context="module">
  export const load: Load = async () => {
    return {
      props: {
        data: await get('home', {
          fetchLinks: [
            'collection.name',
            'collection.photos',
            'photo.photo',
            'photo.title',
            'photo.uid'
          ]
        })
      }
    };
  };
</script>

<script>
  import type { Load } from '@sveltejs/kit';
  import Meta from 'svelte-meta';
  import type { WithMeta } from '../../@types/prismic';
  import type { Home } from '../../@types/_generated/prismic';
  import Collection from '../components/Collection/Collection.svelte';
  import Footer from '../components/Footer/Footer.svelte';
  import Header from '../components/Header/Header.svelte';
  import { get, plaintext, resolveDocument } from '../lib/prismic';

  export let data: WithMeta<Home>;
</script>

<style>
  :global(.collection:not(:last-of-type)) {
    margin-bottom: var(--spacing-4);
    @media (--mobile) {
      margin-bottom: var(--spacing-5);
    }
  }
</style>

<Meta
  title={data.meta_title}
  description={data.meta_description}
  image={data.meta_cover.url}
/>

<Header />
{#each data.collections as { collection }}
  <Collection
    class="collection"
    name={plaintext(collection?.data.name)}
    photos={collection?.data.photos?.map(({ photo }) => photo.data)}
    href={resolveDocument(collection)}
  />
{/each}
<Footer />
