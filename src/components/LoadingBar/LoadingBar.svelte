<!--
  @component
  Simple page loading indicator
-->
<script>
  /** Whether the page is loading @type {boolean} */
  export let loading: boolean;
  export let duration: string = '3s';
  export let delay: string = '150ms';
</script>

<style>
  .loader {
    position: fixed;
    height: 2px;
    left: 0;
    top: 0;
    width: 100%;
    transform: scaleX(0);
    background: var(--color-primary);
    animation: load var(--easing-decelerate);
    transform-origin: 0 0;
  }

  @keyframes load {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
</style>

{#if loading}
  <div
    class="loader {$$props.class}"
    style="animation-duration: {duration}; animation-delay: {delay}"
  />
{/if}
