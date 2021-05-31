---
to: src/routes/<%= name %>.svelte
---
<script context="module">
  import Meta from 'svelte-meta';
  import { queryAt } from '$src/lib/prismic';
  import type { Load } from '@sveltejs/kit';
  import type { <%= h.changeCase.pascal(name) %> } from '$types/_generated/prismic';

  export const load: Load = async ({ fetch }) => {
    const { data } = await queryAt('document.type', <%= prismic %>, fetch);
    return data ? { props: { data } } : undefined;
  }
</script>

<script>
  export let data: <%= h.changeCase.pascal(name) %>;
</script>

<Meta title={data.meta_title} description={data.meta_description} />