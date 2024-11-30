<script>
    export let color = "var(--textDim)";
    export let margin = "0.5em 0";
</script>

<h2 {...$$restProps} style:margin style:color><slot /></h2>

<style>
    h2 {
        font-size: 26px;
        font-weight: 700;
    }
</style>