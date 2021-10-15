<script lang="ts">
  import link, { active } from '$src/actions/link';
  import InstagramIcon from '$src/assets/icons/instagram.svelte';
  import MailIcon from '$src/assets/icons/mail.svelte';
  import TwitterIcon from '$src/assets/icons/twitter.svelte';
  import { ICON_PROPS } from '$src/lib/consts';
  import { resolveDocument } from '$src/lib/prismic';
  import { globalData, media } from '$src/lib/stores';
  import Headroom from 'headroom.js';
  import { onMount } from 'svelte';
  import Hamburger from 'svelte-hamburger';
  import { fade } from 'svelte/transition';

  const NAVS = {
    collections: $globalData?.collections!.map(({ collection }) => ({
      href: resolveDocument(collection),
      label: (collection as any)?.data.name
    })),
    site: [
      { href: '/about', label: 'About' },
      { href: 'https://madi.darkroom.tech', label: 'Prints' }
    ]
  };

  let mobNavOpen = false;
  let header: HTMLElement;
  let top = true;
  let headerHeight = 18;

  function closeMenu() {
    mobNavOpen = false;
  }

  onMount(() => {
    const headroom = new Headroom(header, {
      offset: 50,
      tolerance: 5
    });
    headroom.init();
  });
</script>

<style lang="postcss">
  .spacer {
    margin-bottom: var(--size-24);
    @media (--mobile) {
      margin-bottom: var(--size-32);
    }
    @media (--tablet) {
      margin-bottom: var(--size-40);
    }
  }

  .wrapper {
    z-index: var(--layer-top);
  }

  header {
    position: fixed;
    width: 100%;
    top: 0;
    padding: var(--size-8) 0;
    background: white;
    transition: transform 300ms ease;
    @media (--mobile) {
      transform: translateY(var(--size-5));
    }
    &:global(.headroom--not-top) {
      transform: translateY(0);
    }
    &:global(.headroom--unpinned) {
      transform: translateY(-100%);
    }
  }

  .inner {
    display: flex;
    justify-content: space-between;
  }

  .mast {
    @media (--tablet) {
      display: flex;
      align-items: center;
    }
  }

  .logo {
    font-weight: var(--font-semibold);
    text-transform: uppercase;
    font-size: var(--scale-1);
    margin-right: 2rem;
    line-height: 1;
    letter-spacing: var(--tracking-tight);
  }

  .nav {
    transition: opacity 200ms ease;
    display: flex;
    align-items: center;
    & > *:not(:last-of-type) {
      margin-right: 1.25rem;
    }
  }

  @media not all and (--tablet) {
    .collections {
      margin-top: 2rem;
    }
    .siteNav {
      display: none;
    }
  }

  .navLink {
    color: var(--color-text-secondary);
    transition: color 150ms ease;
    &:global(.active) {
      color: var(--color-text);
    }
    @media (--mobile) {
      &:hover {
        color: var(--color-text);
      }
    }
  }

  .hamburger {
    cursor: pointer;
    @media (--tablet) {
      display: none;
    }
  }

  .mobMenu {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding-top: var(--size-40);
    align: space-between;
    background: white;
    z-index: var(--layer-5);
    grid-auto-rows: auto;
  }

  .mobNav {
    & > * {
      margin-bottom: 1em;
    }
  }

  .mobSocials {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--scale-2);
    color: var(--color-text);
    & > * {
      margin: 0 1.5rem;
    }
  }
</style>

<div class="spacer" style="height: {headerHeight}px" />

<div class="wrapper fullbleed">
  <header
    class="pageGrid typeset-ui {$$props.class}"
    class:top
    bind:this={header}
  >
    <div class="inner" bind:clientHeight={headerHeight}>
      <div class="mast">
        <h1 class="logo">Madeleine Ostoja</h1>
        <!-- {#if !mobNavOpen} -->
        <nav class="nav collections">
          {#each NAVS.collections as { href, label }}
            <a
              sveltekit:prefetch
              use:active
              on:click={closeMenu}
              class="navLink"
              {href}>{label}</a
            >
          {/each}
        </nav>
        <!-- {/if} -->
      </div>
      <nav class="nav siteNav">
        {#each NAVS.site as { href, label }}
          <a use:link use:active class="navLink" {href}>{label}</a>
        {/each}
      </nav>
      <div class="hamburger">
        <Hamburger
          width={$media['--mobile'] ? 30 : 24}
          height={$media['--mobile'] ? 24 : 20}
          open={mobNavOpen}
          on:click={() => (mobNavOpen = !mobNavOpen)}
        />
      </div>
    </div>
  </header>
</div>

{#if mobNavOpen}
  <div class="mobMenu pageGrid" transition:fade={{ duration: 200 }}>
    <nav class="mobNav">
      {#each NAVS.site as { href, label }}
        <a
          use:link
          use:active
          class="navLink typeset-h2"
          on:click={closeMenu}
          {href}
        >
          {label}
        </a>
      {/each}
    </nav>
    <div class="mobSocials">
      <a
        use:link
        on:click={closeMenu}
        href="https://twitter.com/madeleineostoja"
        aria-label="Twitter"
      >
        <TwitterIcon {...ICON_PROPS} />
      </a>
      <a
        use:link
        on:click={closeMenu}
        href="https://instagram.com/madeleineostoja"
        aria-label="Instagram"
      >
        <InstagramIcon {...ICON_PROPS} />
      </a>
      <a
        use:link
        on:click={closeMenu}
        href="mailto:madi@madeleineostoja.com"
        aria-label="Email"
      >
        <MailIcon {...ICON_PROPS} />
      </a>
    </div>
  </div>
{/if}
