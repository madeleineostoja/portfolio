<script>
  import Hamburger from 'svelte-hamburger';
  import { fade } from 'svelte/transition';
  import link from '../../actions/link';
  import InstagramIcon from '../../assets/icons/instagram.svelte';
  import MailIcon from '../../assets/icons/mail.svelte';
  import TwitterIcon from '../../assets/icons/twitter.svelte';

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
    font-size: var(--scale-0);
    @media (--tablet) {
      margin-bottom: var(--spacing-7);
    }
  }

  .logo {
    font-weight: var(--font-weight-bold);
    font-size: var(--scale-1);
  }

  .nav {
    display: none;
    align-items: center;
    & > *:not(:last-of-type) {
      margin-right: 1.5rem;
    }
    @media (--mobile) {
      display: flex;
    }
  }

  .navIcon :global(svg) {
    fill: currentColor;
    width: var(--scale-3);
    height: var(--scale-3);
    @media (--mobile) {
      width: 1em;
      height: 1em;
    }
  }

  .hamburger {
    z-index: var(--layer-top);
    cursor: pointer;
    @media (--mobile) {
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

  .mobNavLink {
    margin-bottom: 1em;
  }

  .mobSocials {
    display: flex;
    align-items: center;
    justify-content: center;
    & > * {
      margin: 0 1.5rem;
    }
  }
</style>

<header class="typeset-ui {$$props.class}">
  <a use:link href="/">
    <h1 class="logo">Madeleine Ostoja</h1>
  </a>
  <nav class="nav">
    <a
      use:link
      href="https://twitter.com/madeleineostoja"
      aria-label="Twitter"
      class="navIcon"
    >
      <TwitterIcon />
    </a>
    <a
      use:link
      href="https://instagram.com/madeleineostoja"
      aria-label="Instagram"
      class="navIcon"
    >
      <InstagramIcon />
    </a>
    <a
      use:link
      href="mailto:madi@madeleineostoja.com"
      aria-label="Email"
      class="navIcon"
    >
      <MailIcon />
    </a>
    <a use:link href="/about">About</a>
    <a use:link href="https://madi.darkroom.tech">Prints</a>
  </nav>
  <div class="hamburger">
    <Hamburger open={mobNavOpen} on:click={() => (mobNavOpen = !mobNavOpen)} />
  </div>
</header>

{#if mobNavOpen}
  <div class="mobMenu pageGrid" transition:fade={{ duration: 150 }}>
    <nav>
      <a
        use:link
        class="mobNavLink typeset-h2"
        on:click={closeMenu}
        href="/about"
      >
        About
      </a>
      <a
        use:link
        class="mobNavLink typeset-h2"
        on:click={closeMenu}
        href="https://madi.darkroom.tech"
      >
        Prints
      </a>
    </nav>
    <div class="mobSocials">
      <a
        use:link
        on:click={closeMenu}
        href="https://twitter.com/madeleineostoja"
        class="navIcon"
        aria-label="Twitter"
      >
        <TwitterIcon />
      </a>
      <a
        use:link
        on:click={closeMenu}
        href="https://instagram.com/madeleineostoja"
        class="navIcon"
        aria-label="Instagram"
      >
        <InstagramIcon />
      </a>
      <a
        use:link
        on:click={closeMenu}
        href="mailto:madi@madeleineostoja.com"
        class="navIcon"
        aria-label="Email"
      >
        <MailIcon />
      </a>
    </div>
  </div>
{/if}
