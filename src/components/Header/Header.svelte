<script>
  import link, { active } from '$src/actions/link';
  import InstagramIcon from '$src/assets/icons/instagram.svelte';
  import MailIcon from '$src/assets/icons/mail.svelte';
  import TwitterIcon from '$src/assets/icons/twitter.svelte';
  import { resolveDocument } from '$src/lib/prismic';
  import Hamburger from 'svelte-hamburger';
  import { fade } from 'svelte/transition';
  import { ICON_PROPS } from '$src/lib/consts';
  import { globalData } from '$src/lib/stores';

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

  function closeMenu() {
    mobNavOpen = false;
  }
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--spacing-6);
    @media (--tablet) {
      margin-bottom: var(--spacing-7);
    }
  }

  @media (--tablet) {
    .mast {
      display: flex;
      align-items: center;
    }
  }

  .logo {
    font-weight: var(--font-weight-semibold);
    text-transform: uppercase;
    font-size: var(--scale-1);
    margin-right: 2rem;
    line-height: 1;
    letter-spacing: var(--tracking-00);
  }

  .nav {
    display: flex;
    align-items: center;
    & > *:not(:last-of-type) {
      margin-right: 1rem;
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
    &:hover,
    &:global(.active) {
      color: var(--color-text);
    }
  }

  .hamburger {
    z-index: var(--layer-top);
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
    padding-top: var(--spacing-5);
    align: space-between;
    background: white;
    z-index: var(--layer-5);
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

<header class="typeset-ui {$$props.class}">
  <div class="mast">
    <h1 class="logo">Madeleine Ostoja</h1>
    <nav class="nav collections">
      {#each NAVS.collections as { href, label }}
        <a sveltekit:prefetch use:active class="navLink" {href}>{label}</a>
      {/each}
    </nav>
  </div>
  <nav class="nav siteNav">
    {#each NAVS.site as { href, label }}
      <a use:link use:active class="navLink" {href}>{label}</a>
    {/each}
  </nav>
  <div class="hamburger">
    <Hamburger open={mobNavOpen} on:click={() => (mobNavOpen = !mobNavOpen)} />
  </div>
</header>

{#if mobNavOpen}
  <div class="mobMenu pageGrid" transition:fade={{ duration: 150 }}>
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
