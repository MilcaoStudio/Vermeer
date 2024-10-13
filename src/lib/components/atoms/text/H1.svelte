<script>
    export let color = "var(--textDim)";
</script>

<h1 {...$$restProps} style:color>
    <slot />
</h1>

<style>
    h1 {
        font-size: 32px;
        font-weight: 700;
        padding: var(--buttonPadding);
    }
</style>