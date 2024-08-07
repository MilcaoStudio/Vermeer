<script context="module">
    import { P1 } from "$lib/index.js";
    import { Story } from "@storybook/addon-svelte-csf";
    export const meta = {
        title: "text/Body Large",
        component: P1,
    }
</script>

<Story name="Default">
    <P1>Example text</P1>
</Story>