<script context="module">
  import { browser } from '$app/env';
  import { prefetchRoutes } from '$app/navigation';
  import { SITE_URL } from '$src/lib/consts';
  import { maxage, queryAt } from '$src/lib/prismic';
  import { globalData } from '$src/lib/stores';
  import '$src/styles';
  import type { Global } from '$types/_generated/prismic';
  import type { Load } from '@sveltejs/kit';
  import Meta from 'svelte-meta';

  export const load: Load = async ({ fetch }) => {
    const { data } = await queryAt('document.type', 'global', fetch, {
      fetchLinks: 'collection.name'
    });

    return !!data ? { props: { data }, maxage } : undefined;
  };
</script>

<script>
  export let data: Global;
  globalData.set(data);

  async function initFullstory() {
    const Fullstory = await import('@fullstory/browser');
    Fullstory.init({ orgId: '130YX8 ' });
  }

  if (browser) {
    initFullstory();
    prefetchRoutes();
  }
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: var(--grid-page);
    grid-auto-rows: min-content;
    & > :global(*) {
      grid-column: 2 / 3;
    }
  }

  main {
    position: relative;
    min-height: 100vh;
    padding: var(--spacing-3) 0;
  }

  .content {
    grid-column: 1 / -1;
    align-items: start;
    align-self: stretch;
  }
</style>

<Meta
  siteUrl={SITE_URL}
  logo="{SITE_URL}/icon.png"
  openGraph={{
    type: 'website',
    locale: 'en_NZ'
  }}
/>

<main class="grid">
  <div class="grid content">
    <slot />
  </div>
</main>
