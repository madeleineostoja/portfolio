<script>
  import link from '$src/actions/link';
  import InstagramIcon from '$src/assets/icons/instagram.svelte';
  import MailIcon from '$src/assets/icons/mail.svelte';
  import TwitterIcon from '$src/assets/icons/twitter.svelte';
  import { ICON_PROPS } from '$src/lib/consts';
</script>

<style>
  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: var(--spacing-6);
    font-size: var(--scale-00);
  }

  .legal {
    color: var(--color-text-secondary);
  }

  .socials {
    display: none;
    align-items: center;
    @media (--mobile) {
      display: flex;
    }
  }

  .socialLink {
    display: block;
    margin-left: 1.5rem;
  }
</style>

<footer {...$$restProps}>
  <span class="legal">
    Copyright &copy; {new Date().getFullYear()} Madeleine Ostoja
  </span>

  <div class="socials">
    <a
      use:link
      class="socialLink"
      href="https://twitter.com/madeleineostoja"
      aria-label="Twitter"
    >
      <TwitterIcon {...ICON_PROPS} />
    </a>
    <a
      use:link
      class="socialLink"
      href="https://instagram.com/madeleineostoja"
      aria-label="Instagram"
    >
      <InstagramIcon {...ICON_PROPS} />
    </a>
    <a
      use:link
      class="socialLink"
      href="mailto:madi@madeleineostoja.com"
      aria-label="Email"
    >
      <MailIcon {...ICON_PROPS} />
    </a>
  </div>
</footer>
