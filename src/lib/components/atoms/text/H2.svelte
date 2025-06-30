<script>
  export let color = "var(--textDim)";
</script>

<h2 {...$$restProps} style:color><slot /></h2>

<style>
  h2 {
    font-size: var(--v-headline-medium-size);
    font-weight: var(--v-headline-medium-weight);
  }
</style>
