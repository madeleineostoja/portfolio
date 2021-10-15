<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import Header from './Header.svelte';
</script>

<Meta title="Header" component={Header} />

<Template let:args>
  <Header {...args} />
</Template>

<Story name="Default" />
