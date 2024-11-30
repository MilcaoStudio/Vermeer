<script>
    export let color = "var(--textDim)";
    export let margin = "0.5em 0";
</script>

<h3 {...$$restProps} style:margin style:color><slot /></h3>

<style>
    h3 {
        font-size: 22px;
        font-weight: 400;
    }
</style>