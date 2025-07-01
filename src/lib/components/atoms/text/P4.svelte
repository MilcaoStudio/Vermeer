<script>
  export let color = "var(--textDim)";
</script>

<p {...$$restProps} style:color><slot /></p>

<style>
  p {
    font-size: var(--v-body-xsmall-size);
    font-weight: var(--v-body-xsmall-size);
    margin: 0;
  }
</style>
