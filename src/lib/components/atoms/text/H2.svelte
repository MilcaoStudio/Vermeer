<script>
    export let color = "var(--textDim)";
</script>

<h2 {...$$restProps} style:color><slot /></h2>

<style>
    h2 {
        font-size: 26px;
        font-weight: 700;
    }
</style>