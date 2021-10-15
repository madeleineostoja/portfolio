<script lang="ts">
  import imgix, { placeholder } from 'svelte-imgix';

  export let src: string;
  export let sizes: string;
  export let alt: string;
  export let height: number;
  export let width: number;
</script>

<img use:imgix={src} src={placeholder(src)} {sizes} {alt} {height} {width} />
