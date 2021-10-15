<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import GalleryImage from './GalleryImage.svelte';
</script>

<Meta title="GalleryImage" component={GalleryImage} />

<Template let:args>
  <GalleryImage {...args} />
</Template>

<Story name="Default" />
