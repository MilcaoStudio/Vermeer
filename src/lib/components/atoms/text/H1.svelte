<script>
    export let color = "var(--textDim)";
    export let margin = "0.5em 0";
</script>

<h1 {...$$restProps} style:margin style:color>
    <slot />
</h1>

<style>
    h1 {
        font-size: 32px;
        font-weight: 700;
        padding: var(--buttonPadding);
    }
</style>