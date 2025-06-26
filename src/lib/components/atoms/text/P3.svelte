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
    font-size: 14px;
    font-weight: 300;
  }
</style>
