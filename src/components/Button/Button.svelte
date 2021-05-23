<script>
  import PrevIcon from '../../assets/icons/caret-left.svelte';
  import NextIcon from '../../assets/icons/caret-right.svelte';
  import link from '../../actions/link';

  /** Link for the button */
  export let href: string;
  /** Whether arrow should be backwards */
  export let back: boolean | undefined = undefined;

  const iconProps = {
    height: '0.625em',
    width: '0.625em'
  };
</script>

<style>
  .button {
    display: inline-flex;
    align-items: center;
    font-size: var(--scale-00);
    padding: 0.5em 1em;
    border-radius: var(--radius-round);
    background: var(--color-grey-100);
    color: var(--color-grey-700);
  }
</style>

<a use:link {href} class="button typeset-ui {$$props.class}">
  {#if back}
    <PrevIcon {...iconProps} />
  {/if}
  <div style="margin: 0 {!back ? '0.3em' : 0} 0 {back ? '0.3em' : 0}">
    <slot />
  </div>
  {#if !back}
    <NextIcon {...iconProps} />
  {/if}
</a>
