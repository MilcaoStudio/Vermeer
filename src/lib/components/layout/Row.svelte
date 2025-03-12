<script>
    let className = "";
    export { className as class };
    export let gap = 8;
</script>

<div class={["row", className].join(" ")} style:gap="{gap}px" >
    <slot />
</div>

<style>
    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>