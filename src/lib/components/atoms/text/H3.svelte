<script>
    export let color = "var(--textDim)";
</script>

<h3 {...$$restProps} style:color><slot /></h3>

<style>
    h3 {
        font-size: 22px;
        font-weight: 400;
    }
</style>