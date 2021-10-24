<script lang="ts">
  /** Title for the header */
  export let title: string;
  /** Whether to make it bigger */
  export let large: boolean | undefined = undefined;
</script>

<style lang="postcss">
  .header {
    padding-bottom: var(--size-5);
    border-bottom: 1px solid var(--color-grey-300);
    margin-bottom: var(--size-8);
    @media (--mobile) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .name {
    line-height: var(--line-none);
    white-space: nowrap;
  }

  .action {
    display: inline-block;
    margin-top: var(--size-4);
    transform: translateX(2px);
    @media (--mobile) {
      margin-top: 0;
      transform: none;
    }
  }
</style>

<div class="header {$$props.class}">
  <h1 class="name {large ? 'typeset-h1' : 'typeset-h2'}">{title}</h1>
  {#if $$slots.action}
    <div class="action"><slot name="action" /></div>
  {/if}
</div>
