<script lang="ts">
  import link from '$src/actions/link';
  import InstagramIcon from '$src/assets/icons/instagram.svelte';
  import MailIcon from '$src/assets/icons/mail.svelte';
  import TwitterIcon from '$src/assets/icons/twitter.svelte';

  const socialIconProps = {
    width: '1rem',
    height: '1rem',
    fill: 'currentColor'
  };
</script>

<style lang="postcss">
  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: var(--size-32);
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
      <TwitterIcon {...socialIconProps} />
    </a>
    <a
      use:link
      class="socialLink"
      href="https://instagram.com/madeleineostoja"
      aria-label="Instagram"
    >
      <InstagramIcon {...socialIconProps} />
    </a>
    <a
      use:link
      class="socialLink"
      href="mailto:madi@madeleineostoja.com"
      aria-label="Email"
    >
      <MailIcon {...socialIconProps} />
    </a>
  </div>
</footer>
