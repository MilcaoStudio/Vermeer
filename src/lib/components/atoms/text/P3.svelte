<script>
  export let color = "var(--textDim)";
  export let width = "auto";
  export let height = "auto";
</script>

<p {...$$restProps} style:color style:width style:height>
  <slot />
</p>

<style>
  p {
    font-size: var(--v-body-small-size);
    font-weight: var(--v-body-small-weight);
    margin: 0;
  }
</style>
