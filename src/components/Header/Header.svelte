<script>
  import { ICON_PROPS } from '../../lib/consts';

  import Hamburger from 'svelte-hamburger';
  import { fade } from 'svelte/transition';
  import link, { active } from '../../actions/link';
  import InstagramIcon from '../../assets/icons/instagram.svelte';
  import MailIcon from '../../assets/icons/mail.svelte';
  import TwitterIcon from '../../assets/icons/twitter.svelte';
  import { resolveDocument } from '../../lib/prismic';

  const NAVS = {
    collections: [
      {
        href: resolveDocument({ type: 'collection', uid: 'urban-landscape' }),
        label: 'Urban Landscape'
      },
      {
        href: resolveDocument({ type: 'collection', uid: 'the-streets' }),
        label: 'Street'
      },
      {
        href: resolveDocument({ type: 'collection', uid: 'people' }),
        label: 'People'
      }
    ],
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
    align-items: center;
    margin-bottom: var(--spacing-6);
    @media (--tablet) {
      margin-bottom: var(--spacing-7);
    }
  }

  .mast {
    display: flex;
    align-items: center;
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
    display: none;
    align-items: center;

    & > *:not(:last-of-type) {
      margin-right: 1rem;
    }
    @media (--tablet) {
      display: flex;
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

  .mobNavHeading {
    margin-bottom: 0.5em;
    padding-bottom: 0.5em;
  }

  .mobNav--collections {
    margin-bottom: var(--spacing-3);
    padding-bottom: var(--spacing-2);
    border-bottom: 1px solid var(--color-grey-300);
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
    <a use:link href="/">
      <h1 class="logo">Madeleine Ostoja</h1>
    </a>
    <nav class="nav">
      {#each NAVS.collections as { href, label }}
        <a use:link use:active class="navLink" {href}>{label}</a>
      {/each}
    </nav>
  </div>
  <nav class="nav">
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
    <div>
      <nav class="mobNav mobNav--collections">
        {#each NAVS.collections as { href, label }}
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
    </div>
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
