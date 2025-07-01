<script>
  export let color = "var(--textDim)";
</script>

<h1 {...$$restProps} style:color>
  <slot />
</h1>

<style>
  h1 {
    font-size: var(--v-headline-large-size);
    font-weight: var(--v-headline-large-weight);
    padding: var(--buttonPadding);
  }
</style>
