<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import Anchor from './Anchor.svelte';
</script>

<Meta title="Anchor" component={Anchor} />

<Template let:args>
  <Anchor {...args}>Go to page</Anchor>
</Template>

<Story name="Default" />
