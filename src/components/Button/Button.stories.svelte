<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import Button from './Button.svelte';
</script>

<Meta title="Button" component={Button} />

<Template let:args>
  <Button {...args}>Click me</Button>
</Template>

<Story name="Default" />
