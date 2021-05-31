<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import LoadingBar from './LoadingBar.svelte';
</script>

<Meta title="LoadingBar" component={LoadingBar} />

<Template let:args>
  <LoadingBar {...args} />
</Template>

<Story name="Default" />
