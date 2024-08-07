<script context="module">
    import { H3 } from "$lib/index.js";
    import { Story } from "@storybook/addon-svelte-csf";
    export const meta = {
        title: "text/H3",
        component: H3,
    }
</script>

<Story name="Default">
    <H3>Johannes Vermeer was a Dutch painter</H3>
</Story>