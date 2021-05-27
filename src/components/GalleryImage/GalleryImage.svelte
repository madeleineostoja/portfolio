<!--
  @component
  Image for collections
-->
<script>
  import { resolveDocument } from '../../lib/prismic';
  import imgix, { placeholder } from 'svelte-imgix';

  /** UID of the photo @type {string} */
  export let uid: string;
  /** Image src @type {string} */
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

<a href={resolveDocument({ type: 'photo', uid })}>
  <img use:imgix={src} src={placeholder(src)} {sizes} {alt} {width} {height} />
</a>
