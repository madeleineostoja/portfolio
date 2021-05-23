<script>
  import { page } from '$app/stores';
  import Meta from 'svelte-meta';
  import '../styles';

  $: siteUrl = `${$page.host}${$page.path}`;
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
  {siteUrl}
  logo="{siteUrl}/logo.png"
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
