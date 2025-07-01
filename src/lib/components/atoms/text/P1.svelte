<script>
  export let color = "var(--textDim)";
</script>

<p {...$$restProps} style:color><slot /></p>

<style>
  p {
    font-size: var(--v-body-large-size);
    font-weight: var(--v-body-large-weight);
    margin: 0;
  }
</style>
