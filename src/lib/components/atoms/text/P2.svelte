<script>
  export let color = "var(--textDim)";
</script>

<p {...$$restProps} style:color><slot /></p>

<style>
  p {
    font-size: var(--v-body-medium-size);
    font-weight: var(--v-body-medium-weight);
    margin: 0;
  }
</style>
