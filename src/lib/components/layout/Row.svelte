<script lang="ts">
    let className = "";
    export { className as class };
    export let gap = 8;
    export let width: string | number = "100%";
</script>

<div class={["row", className].join(" ")} style:gap="{gap}px" style:width>
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