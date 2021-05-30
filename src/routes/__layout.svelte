<script>
  import { SITE_URL } from '../lib/consts';
  import Meta from 'svelte-meta';
  import '../styles';
  import { onMount } from 'svelte';
  import { navigating } from '$app/stores';
  import LoadingBar from '../components/LoadingBar/LoadingBar.svelte';

  onMount(async () => {
    const Fullstory = await import('@fullstory/browser');

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

<LoadingBar loading={!!$navigating} --duration="3s" --delay="100ms" />
<main class="grid">
  <div class="grid content">
    <slot />
  </div>
</main>
