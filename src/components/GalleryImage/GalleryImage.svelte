<!--
  @component
  Image for collections
-->
<script>
  import { resolveDocument } from '../../lib/prismic';
  import imgix, { placeholder } from 'svelte-imgix';

  export let uid: string;
  export let collection: string;
  export let src: string;
  export let alt: string;
  export let width: string;
  export let height: string;
  export let sizes: string;
</script>

<style>
  a {
    transition: opacity 150ms ease;
    &:hover {
      opacity: 0.8;
    }
  }
</style>

<a href="{resolveDocument({ type: 'photo', uid })}?ref=collection">
  <img use:imgix={src} src={placeholder(src)} {sizes} {alt} {width} {height} />
</a>
