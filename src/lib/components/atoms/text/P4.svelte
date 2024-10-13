<script>
    export let color = "var(--textDim)";
</script>

<p {...$$restProps} style:color><slot /></p>

<style>
    p {
        font-size: 12px;
        font-weight: 300;
    }
</style>