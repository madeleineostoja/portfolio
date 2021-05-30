<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import LoadingBar from './LoadingBar.svelte';
</script>

<Meta title="LoadingBar" component={LoadingBar}/>

<Template let:args>
  <LoadingBar {...args}/>
</Template>

<Story name="Default" />

