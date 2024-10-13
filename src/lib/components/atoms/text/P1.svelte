<script>
    export let color = "var(--textDim)";
</script>

<p {...$$restProps} style:color><slot /></p>

<style>
    p {
        font-size: 18px;
        font-weight: 700;
    }
</style>