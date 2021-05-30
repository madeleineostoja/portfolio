<!--
  @component
  Simple page loading indicator
-->
<script>
  /** Whether the page is loading @type {boolean} */
  export let loading: boolean;
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
    animation: load var(--easing-decelerate) var(--duration, 3s);
    transform-origin: 0 0;
    animation-delay: var(--delay, 100ms);
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
  <div class="loader {$$props.class}" />
{/if}
