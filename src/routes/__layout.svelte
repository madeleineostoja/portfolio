<script>
  import { prefetchRoutes } from '$app/navigation';
  import { navigating } from '$app/stores';
  import { onMount } from 'svelte';
  import Meta from 'svelte-meta';
  import LoadingBar from '../components/LoadingBar/LoadingBar.svelte';
  import { SITE_URL } from '../lib/consts';
  import '../styles';

  onMount(async () => {
    const Fullstory = await import('@fullstory/browser');

    prefetchRoutes();
    Fullstory.init({ orgId: '130YX8 ' });
  });
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

<LoadingBar loading={!!$navigating} duration="2s" delay="300ms" />
<main class="grid">
  <div class="grid content">
    <slot />
  </div>
</main>
