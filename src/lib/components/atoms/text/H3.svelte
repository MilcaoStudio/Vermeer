<script>
  export let color = "var(--textDim)";
</script>

<h3 {...$$restProps} style:color><slot /></h3>

<style>
  h3 {
    font-size: var(--v-headline-small-size);
    font-weight: var(--v-headline-small-size);
  }
</style>
