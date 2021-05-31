<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import SectionHeader from './SectionHeader.svelte';
</script>

<Meta title="SectionHeader" component={SectionHeader} />

<Template let:args>
  <SectionHeader {...args} />
</Template>

<Story name="Default" />
