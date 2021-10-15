<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import ImageGrid from './ImageGrid.svelte';
</script>

<Meta title="ImageGrid" component={ImageGrid} />

<Template let:args>
  <ImageGrid {...args} />
</Template>

<Story name="Default" />
