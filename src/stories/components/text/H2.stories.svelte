<script context="module">
    import { H2 } from "$lib/index.js";
    import { Story } from "@storybook/addon-svelte-csf";
    export const meta = {
        title: "text/H2",
        component: H2,
    }
</script>

<Story name="Default">
    <H2>Johannes Vermeer was a Dutch painter</H2>
</Story>