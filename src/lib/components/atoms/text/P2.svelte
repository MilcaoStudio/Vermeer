<script>
    export let color = "var(--textDim)";
</script>

<p {...$$restProps} style:color><slot /></p>

<style>
    p {
        font-size: 16px;
        font-weight: 400;
    }
</style>