<!--
  @component
  Image for collections
-->
<script lang="ts">
  import { resolveDocument } from '$src/lib/prismic';
  import imgix, { placeholder } from 'svelte-imgix';

  export let uid: string;
  export let src: string;
  export let alt: string;
  export let width: string;
  export let height: string;
  export let sizes: string;
</script>

<style lang="postcss">
  a {
    display: block;
    transition: opacity 150ms ease;
    @media (--mobile) {
      &:hover {
        opacity: 0.8;
      }
    }
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>

<a sveltekit:prefetch href={resolveDocument({ type: 'photo', uid })}>
  <img use:imgix={src} src={placeholder(src)} {sizes} {alt} {width} {height} />
</a>
