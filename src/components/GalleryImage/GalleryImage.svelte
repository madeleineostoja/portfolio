<!--
  @component
  Image for collections
-->
<script>
  import { resolveDocument } from '../../lib/prismic';
  import imgix, { placeholder } from 'svelte-imgix';
  import link from '../../actions/link';

  export let uid: string;
  export let src: string;
  export let alt: string;
  export let width: string;
  export let height: string;
  export let sizes: string;
</script>

<style>
  a {
    display: block;
    transition: opacity 150ms ease;
    &:hover {
      opacity: 0.8;
    }
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>

<a use:link href="{resolveDocument({ type: 'photo', uid })}?ref=collection">
  <img use:imgix={src} src={placeholder(src)} {sizes} {alt} {width} {height} />
</a>
