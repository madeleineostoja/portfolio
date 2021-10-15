<!--
  @component
  Anchor CTA
-->
<script lang="ts">
  import link from '$src/actions/link';
  import Arrow from '$src/assets/icons/arrow-right.svelte';

  /** URL to link to */
  export let href: string;
</script>

<style lang="postcss">
  .anchor {
    display: inline-flex;
    align-items: center;
    color: var(--color-primary);
  }

  .label {
    margin-right: 0.5em;
    transform: translateY(-2%);
  }
</style>

<a use:link {href} class="anchor typeset-ui {$$props.class}">
  <div class="label">
    <slot />
  </div>
  <Arrow height="0.85em" width="0.85em" />
</a>
