<script>
    export let color = "var(--textDim)";
    export let margin = "0";
</script>

<p {...$$restProps} style:color style:margin><slot /></p>

<style>
    p {
        font-size: 16px;
        font-weight: 400;
    }
</style>