---
to: src/routes/<%= name %>.svelte
---
<script context="module">
  import Meta from 'svelte-meta';
  import { get } from '../lib/prismic';
  import type { Load } from '@sveltejs/kit';
  import type { <%= h.changeCase.pascal(name) %> } from '../../@types/_generated/prismic';

  export const load: Load = async () => {
    return {
      props: {
        data: await get('<%= prismic %>')
      }
    };
  }
</script>

<script>
  export let data: <%= h.changeCase.pascal(name) %>;
</script>

<Meta title={data.meta_title} description={data.meta_description} />