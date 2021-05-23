<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Collection from './Collection.svelte';
</script>

<Meta title="Collection" component={Collection} />

<Template let:args>
  <Collection {...args} />
</Template>

<Story name="Default" />
